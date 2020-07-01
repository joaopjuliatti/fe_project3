/* eslint-disable react/prop-types */
import React from 'react'

import { FormWrapper } from './form'
import { Modal } from '../../../../components/Modal'


export const AddAnimalModal = props => {
  const { handleModal,setIsLoading} =  props

  return (     
  <Modal
    isWithoutHeight
    width="720px"
    radius={20}
    onDismiss={() => handleModal(false)}
  >
    <FormWrapper  setIsLoading={setIsLoading} handleModal={handleModal}/>
  </Modal>)
  
}
