/* eslint-disable react/prop-types */
import React from 'react'
import { history } from '~/navigation/history'

import * as Yup from 'yup'
import { withFormik } from 'formik'

import { Input } from '@material-ui/core';
import { TextErrorInput } from '~/components/text-error-input'
import { showToast } from '~/components/toast'

import { authToken } from '~/services/api'
import { asyncLocalStorage } from '~/utils'

import { ContainerText, Title, Form, ContainerLogin, Section, Button } from './styles'

const FormWrapper = props => {
  const { values, errors, handleChange, touched, handleSubmit, handleBlur } = props
  return (
    <>
      <ContainerLogin>
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

    try {
      const response = await authToken(email, password)

      if (response.status === 401) {
        props.setIsLoading(false)
        if (response.data.error.message === 'Your email address is not registered') {
          // email desconhecido
          showToast('Email não registrado')
        } else {
          // email conhecido com senha errada
          showToast('Senha incorreta, tente novamente')
        }
        return false
      }

      // opção caso ele ter que redefinir senha
      const { mustChangePassword } = response.data

      if (mustChangePassword) {
        await asyncLocalStorage.setItem('email', email)
        history.push('/redefinir')
      } else {
        // opção caso o email e senha estão corretos e não precisa redefinir senha
        const { token, partner } = response.data

        await asyncLocalStorage.setItem('email', email)
        await asyncLocalStorage.setItem('token', token)
        await asyncLocalStorage.setItem('partner-name', partner.name)

        props.goToPage('home')
      }
    } catch (error) {
      showToast('Houve um erro ao autenticar o usuário')
    }
  }
})(FormWrapper)
