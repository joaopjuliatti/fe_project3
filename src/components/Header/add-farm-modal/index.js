/* eslint-disable react/prop-types */
import React from 'react'

import { FormWrapper } from './form'
import { Modal } from '../../Modal'


export const AddFarmModal = props => {
  const { handleModal,setIsLoading, setUpdateFarms } =  props

  return (     
  <Modal
    isWithoutHeight
    width="720px"
    radius={20}
    onDismiss={() => handleModal(false)}
  >
    <FormWrapper  setIsLoading={setIsLoading} handleModal={handleModal} setUpdateFarms={setUpdateFarms}/>
  </Modal>)
  
}
