/* eslint-disable react/prop-types */
import React from 'react'

import { Modal } from '../../../components/Modal'
import { FormFormik } from './form'


export const AddAnimalModal = props => {
  const { handleModal } = props

  return (
    <>
      <Modal
        isWithoutHeight
        width="720px"
        radius={20}
        onDismiss={() => handleModal(false)}
      >
      <FormFormik handleModal={handleModal}/>
      </Modal>
    </>
  )
}
