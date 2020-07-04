/* eslint-disable react/prop-types */
import React from 'react'

import { FormWrapper } from './form'
import { Modal } from '../../../components/Modal'


export const AddCashActivityModal = props => {
  const { handleModal,setIsLoading, flowTypes, setUpdateTable} =  props
  return (     
  <Modal
    isWithoutHeight
    width="720px"
    radius={20}
    onDismiss={() => handleModal(false)}
  >
    <FormWrapper  setIsLoading={setIsLoading} handleModal={handleModal} flowTypes={flowTypes} setUpdateTable={setUpdateTable}/>
  </Modal>)
  
}
