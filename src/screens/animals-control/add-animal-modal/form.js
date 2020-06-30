/* eslint-disable react/prop-types */
import React from 'react'

import * as Yup from 'yup'
import { withFormik } from 'formik'
import { Input } from '@material-ui/core';

import { TextErrorInput } from '../../../components/text-error-input'
import { showToast } from '../../../components/toast'

import { addAnimal } from '../../../services/api'
import { asyncLocalStorage } from '../../../utils'

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
              id="RealId"
              placeholder="Número de registro do animal"
              value={values.RealId}
              type="text"
              onChange={handleChange('RealId')}
              onBlur={handleBlur('RealId')}
            />
            {errors.RealId && touched.RealId && <TextErrorInput>{errors.RealId}</TextErrorInput>}
          </Section>
          <Section>
            <Input
              autoFocus
              id="initialAge"
              placeholder="Idade inicial do animal(meses)"
              value={values.placeholder}
              type="number"
              onChange={handleChange('initialAge')}
              onBlur={handleBlur('initialAge')}
            />
            {errors.initialAge && touched.initialAge && <TextErrorInput>{errors.initialAge}</TextErrorInput>}
          </Section>
                    <Section>
            <Input
              autoFocus
              id="boughtAt"
              placeholder="Data de aquisição/nascimento do animal"
              value={values.boughtAt}
              type="date"
              onChange={handleChange('boughtAt')}
              onBlur={handleBlur('boughtAt')}
            />
            {errors.boughtAt && touched.boughtAt && <TextErrorInput>{errors.boughtAt}</TextErrorInput>}
          </Section>

          <Section>
            <Input
              placeholder="Peso inicial do animal"
              id="initialWeight"
              type="number"
              onChange={handleChange('initialWeight')}
              onBlur={handleBlur('initialWeight')}
            />
            {errors.initialWeight && touched.initialWeight && <TextErrorInput>{errors.initialWeight}</TextErrorInput>}
          </Section>
          <Button onClick={handleSubmit}>Registrar novo Animal</Button>
        </Form>
      </ContainerLogin>
    </>
  )
}

export const FormFormik = withFormik({
  validationSchema: () => {
    const schema = {
      RealId: Yup.number().required('Preencha o campo Número do Animal'),
      initialAge: Yup.number().required('Preencha o campo Idade inicial do animal'),
      boughtAt: Yup.date().required('Preencha o campo Data de aquisição/nascimento do animal'),
      initialWeight: Yup.number().required('Preencha o campo Peso inicial do animal'),
    }
    return Yup.object().shape(schema)
  },
  handleSubmit: async (values, { props }) => {
    props.setIsLoading(true)
    const { RealId, initialAge, boughtAt, initialWeight } = values
    const FarmId = await asyncLocalStorage.get("FarmId")

    try {
      const response = await addAnimal({RealId,FarmId,initialAge,boughtAt, initialWeight})
      props.handleModal(false)
    } catch (error) {
      showToast('Houve um ao cadastrar novo animal')
    }
  }
})(FormWrapper)
