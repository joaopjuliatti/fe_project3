import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

export const ToastComponent = () => {
  return (
    <ToastContainer
      containerId="TOAST"
      position="bottom-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover={false}
    />
  )
}

export const showToast = (text = 'Erro, por favor tente mais tarde') => {
  toast.dismiss()

  return toast(text, {
    position: 'bottom-center',
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
  })
}

showToast.propTypes = {
  text: PropTypes.string
}
