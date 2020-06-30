import { useState } from 'react'

export const useTable = () => {
  const [optionActive, setOptionActive] = useState('')
  const [clicked, setClicked] = useState('admin')

  const handleOptionTable = option => {
    if (optionActive && optionActive === option) {
      setOptionActive('')
    } else {
      setOptionActive(option)
    }
  }
  const handleOptionTableMobile = option => {
    setClicked(option)
  }

  return [clicked, handleOptionTableMobile, handleOptionTable, optionActive]
}
