import React, { useContext } from 'react'
import { TemplateContext } from '~/components/Template/context'

import { FormFormik } from './form'
import { useLogin } from './hooks'

export const Login = () => {
  const { setIsLoading, goToPage } = useContext(TemplateContext)

  useLogin(setIsLoading)

  return <FormFormik setIsLoading={setIsLoading} goToPage={goToPage} />
}
