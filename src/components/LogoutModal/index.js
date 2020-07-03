/* eslint-disable react/prop-types */
import React from 'react'

import { Button } from  './styles'
import { Modal } from '../Modal'

export const LogoutModal = ({ handleModal, logout }) => {
  return (
    <Modal
      width="500px"
      isWithoutHeight
      title="Deseja mesmo sair?"
      onDismiss={() => handleModal(false)}
      footer={<Button onClick={logout}>Fazer logout</Button>}
    />
  )
}
