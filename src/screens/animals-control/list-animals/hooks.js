/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { theme, Text } from '../../../components/globalStyle'

import { getListAnimals, repurchaseAnimal,deactiveAnimal, sellAnimal } from '../../../services/api'

import { Trash } from '../../../icons/svgs/trash'
import { Sell } from '../../../icons/svgs/sell'
import { asyncLocalStorage, formatDate } from '../../../utils'
import { showToast } from '../../../components/toast'

import { WrapperIcon, ButtonOutline, BoxButton } from './styles'

export const useListAnimals = (setIsLoading, goToPage, activePage, setActivePage) => {

  const INITIAL_STATE = [
        { item: 'RealId', label: 'Numero de Identificação', show: true, blocked: true },
        { item: 'ageMonth', label: 'Idade em Meses', show: true, blocked: true },
        { item: 'lastWeight', label: 'Ultima Pesagem', show: true, blocked: true },
        { item: 'boughtAt', label: 'Data de Aquisição/Nascimento', show: true, blocked: true },
        { item: 'editColumn', label: '', show: true, blocked: true }
    ]

  const [showCells, setShowCells] = useState(INITIAL_STATE)

  const [rowsFattening, setRowsFattening] = useState([])

  const [rowsSold, setRowsSold] = useState([])

  const [warningMessage, setWarningMessage] = useState('')

  const [visibleOpt, setVisibleOpt] = useState({ tabIndex: 0 })

  const [updateTable, setUpdateTable] = useState(false)

  const [showAddAnimalModal, setShowAddAnimalModal] = useState(false)

  const handleModal = async (option) => {
    setUpdateTable(option)
    setShowAddAnimalModal(option)
  }

  const handleClick = async (option, id) => {
    setIsLoading(true)
    if (!option) return
    const FarmId = await asyncLocalStorage.getItem('FarmId')
    const token = await asyncLocalStorage.getItem('token')

    if (option === 'deactive') {
      const response = await deactiveAnimal({AnimalId:id},token)
      const { error } = response.data
      if (error) {
        showToast(`Error tentando desativar o animal`)
      } else {
        setUpdateTable(true)
        setIsLoading(false)
        showToast(`Animal desativado com sucesso`)
      }
      setIsLoading(false)
    } else if (option === 'sell') {
      const response = await sellAnimal({AnimalId:id},token)
      const { error } = response.data
      if (error) {
        showToast(`Error ao tentar vender o animal`)
      } else {
        setUpdateTable(true)
        setIsLoading(false)
        showToast(`Animal vendido com sucesso`)
      }
      setIsLoading(false)
      
    } else if (option === 'repurchase') {
      const response = await repurchaseAnimal({AnimalId:id},token)
      const { error } = response.data
      if (error) {
        showToast(`Error tentando recomprar o animal`)
      } else {
        setUpdateTable(true)
        setIsLoading(false)
        showToast(`Animal recomprado com sucesso`)
      }
      setIsLoading(false)
    }
  }

  const generateTables = async () => {
    setIsLoading(true)
    if (activePage !== 'animals-control/list-animals') setActivePage('animals-control/list-animals')
    const getData = async () => {
      const FarmId = await asyncLocalStorage.getItem('FarmId')
      const token = await asyncLocalStorage.getItem('token')
      try {
        setWarningMessage('')
        const response = await getListAnimals(FarmId,token)
        if (response) {
          if (!response.data.animals.length > 0) {
            setWarningMessage('Ainda não existem animais cadastrados')
          }
          const rowsFatteningResponse = response.data.animals
            .filter(user => user.status === `fattening`)
            .map(user => {
              const { RealId, ageMonth, id, boughtAt, lastWeight} = user
              return {
                RealId:  (
                  <Text bold align="center" color={theme.colors.blue900} size="16px">
                    {(RealId) || '---'}
                  </Text>
                ),
                ageMonth:(
                  <Text bold align="center" color={theme.colors.blue900} size="16px">
                    {(ageMonth) || '---'}
                  </Text>
                ),
                lastWeight: (
                  <Text bold align="center" color={theme.colors.blue900} size="16px">
                    {(lastWeight) || '---'}
                  </Text>
                ),
                boughtAt:(
                  <Text bold align="center" color={theme.colors.blue900} size="16px">
                    {(formatDate(boughtAt,false)) || '---'}
                  </Text>
                ),
                editColumn: (
                  <WrapperIcon>
                    <BoxButton active={activePage === 'animals-control/list-animals'} onClick={() => handleClick(`sell`,id)}>
                      <Sell />
                    </BoxButton>
                    <BoxButton
                      active={activePage === 'animals-control/list-animals'}
                      onClick={() => handleClick(`deactive`, id)}
                    >
                      <Trash />
                    </BoxButton>
                  </WrapperIcon>
                )
              }
            })

          const rowsDeactiveResponse = response.data.animals
          .filter(user => user.status === `sold`)
            .map(user => {

              const { RealId, ageMonth, id, boughtAt, lastWeight} = user

              return {
                RealId: (
                  <Text align="center" color={theme.colors.grey600} size="16px">
                    {RealId || '---'}
                  </Text>
                ),
                ageMonth:(
                  <Text align="center" color={theme.colors.grey600} size="16px">
                    {ageMonth || '---'}
                  </Text>
                ),
                lastWeight: (
                  <Text align="center" color={theme.colors.grey600} size="16px">
                    {lastWeight || '---'}
                  </Text>
                ),
                boughtAt:(
                  <Text align="center" color={theme.colors.grey600} size="16px">
                    {formatDate(boughtAt,false) || '---'}
                  </Text>
                ),
                editColumn:
                  <ButtonOutline onClick={() => handleClick('repurchase',id)}>Desfazer Venda</ButtonOutline> || '---'
              }
            })
          setRowsFattening([...rowsFatteningResponse])
          setRowsSold([...rowsDeactiveResponse])
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
        setWarningMessage('Ops, ocorreu um erro. Atualize essa página e entre em contato com João se o erro permanecer.')
        setIsLoading(false)
      }
    }
    getData()
  }

  useEffect(() => {
    setIsLoading(true)
    generateTables()
    setUpdateTable(false)
  }, [])


  return [
    showCells,
    setRowsFattening,
    rowsFattening,
    setRowsSold,
    rowsSold,
    warningMessage,
    visibleOpt,
    setVisibleOpt,
    handleModal,
    showAddAnimalModal,
  ]
}
