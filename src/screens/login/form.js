/* eslint-disable react/prop-types */
import React from 'react'

import * as Yup from 'yup'
import { withFormik } from 'formik'

import { Input } from '@material-ui/core';
import { TextErrorInput } from '../../components/text-error-input'
import { showToast } from '../../components/toast'

import { authToken, getAllFarms } from '../../services/api'
import { asyncLocalStorage } from '../../utils'

import { ContainerText, Title, Form, ContainerLogin, Section, Button, ContainerForm } from './styles'

const FormWrapper = props => {
  const { values, errors, handleChange, touched, handleSubmit, handleBlur } = props
  return (
    <>
      <ContainerLogin>
        <ContainerForm>
          <ContainerText>
            <Title>Acesse sua conta</Title>
          </ContainerText>
          <Form onSubmit={handleSubmit}>
            <Section>
              <Input
                autoFocus
                id="email"
                placeholder="Email"
                value={values.email}
                type="text"
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {errors.email && touched.email && <TextErrorInput>{errors.email}</TextErrorInput>}
            </Section>

            <Section>
              <Input
                placeholder="Senha"
                id="password"
                type="password"
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {errors.password && touched.password && <TextErrorInput>{errors.password}</TextErrorInput>}
            </Section>
            <Button onClick={handleSubmit}>Entrar</Button>
          </Form>
        </ContainerForm>
      </ContainerLogin>
    </>
  )
}

export const FormFormik = withFormik({
  mapPropsToValues: () => {
    const email = localStorage.getItem('email')

    return { email: email || '' }
  },
  validationSchema: () => {
    const schema = {
      email: Yup.string()
        .email('Digite um email válido')
        .required('Preencha o campo Email'),
      password: Yup.string().required('Preencha o campo Senha')
    }
    return Yup.object().shape(schema)
  },
  handleSubmit: async (values, { props }) => {
    props.setIsLoading(true)
    const { email, password } = values
    console.log(email, password)
    try {
      const response = await authToken({email, password})
      if (response.status === 401) {
        props.setIsLoading(false)
      
        if (response.data.message && response.data.message === 'Usuário ou senha errados') {
          // email desconhecido
          showToast('Usuário ou senha errados')
        }
        return false
      }
        // opção caso o email e senha estão corretos
        const { token } = response.data

        await asyncLocalStorage.setItem('email', email)
        await asyncLocalStorage.setItem('token', token)
        const farms = (await getAllFarms(token)).data.farms

        await asyncLocalStorage.setItem('FarmId', farms[0].id)
        await asyncLocalStorage.setItem('FarmName', farms[0].name)

        props.goToPage('home')

    } catch (error) {
      console.log(error)
      showToast('Houve um erro ao autenticar o usuário')
    }
  }
})(FormWrapper)
