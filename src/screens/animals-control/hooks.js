/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { theme, Text } from '../../components/globalStyle'

import { addAnimal, getListAnimals } from '~/services/api'

import { Trash } from '../../../public/svgs/trash'
import { Sell } from '../../../public/svgs/sell'
import { asyncLocalStorage, formatDate } from '~/utils'
import { showToast } from '~/components/toast'

import { WrapperIcon, ButtonOutline, BoxButton } from './styles'

export const useListAnimals = (setIsLoading, goToPage, activePage, setActivePage) => {

  const INITIAL_STATE = [
        { item: 'RealId', label: 'Número de Identificação', show: true, blocked: true },
        { item: 'ageMonth ', label: 'Idade em Meses', show: true, blocked: true },
        { item: 'lastWeight', label: 'Ultima Pesagem', show: true, blocked: true },
        { item: 'boughtAt', label: 'Data do Primeiro Cadastro', show: true, blocked: true },
        { item: 'editColumn', label: '', show: true, blocked: true }
    ]

  const [showCells, setShowCells] = useState(INITIAL_STATE)

  const [rowsFattening, setRowsFattening] = useState([])

  const [rowsSold, setRowsSold] = useState([])

  const [warningMessage, setWarningMessage] = useState('')

  const [visibleOpt, setVisibleOpt] = useState({ tabIndex: 0 })

  const [updateTable, setUpdateTable] = useState(false)

  const [showAddAnimalModal, setShowAddAnimalModal] = useState(false)

  const [partnerEmployeeEmail, setPartnerEmployeeEmail] = useState(``)

  const [listUpdates, setListUpdates] = useState([])


//   const handleModal = async (option, location) => {
//     if (location === 'inativate') {
//       setIsLoading(false)
//     } else if (location === 'list-updates') {
//       if (option === true) {
//         const partnerEmployeeId = await asyncLocalStorage.getItem('partnerEmployeeId')
//         const response = await getListUpdates({ partnerEmployeeId })
//         const { response: listUpdatesEmployee, error } = response.data
//         if (error) {
//           showToast(`Error ao tentar visualizar o histórico de alteração do usuário`)
//         } else {
//           console.log(listUpdatesEmployee)
//           setListUpdates([...listUpdatesEmployee])
//           setIsLoading(false)
//         }
//         setIsLoading(false)
//       }
//       setShowListUpdatesModal(option)
//     }
//   }

  const handleClick = async (option, email, id, active) => {
    setIsLoading(true)
    if (!option) return
    await asyncLocalStorage.setItem(`emailPartnerEmployee`, email)
    await asyncLocalStorage.setItem(`partnerEmployeeId`, id)
    if (option === 'delete') {
      setIsLoading(false)
      setPartnerEmployeeEmail(email)
    } else if (option === 'history') {
      setIsLoading(false)
      setActivePage(`animals-control`)
      goToPage('animals/animal-history')
    } else if (option === 'reactivate') {
      const response = await updateUser({ partnerEmployeeId: id, active: true })
      const { error } = response.data
      if (error) {
        showToast(`Error tentando reativar o usuário`)
      } else {
        setUpdateTable(true)
        setIsLoading(false)
        showToast(`Usuário reativado com sucesso`)
      }
      setIsLoading(false)
    } else if (option === 'list-updates') {
      setPartnerEmployeeEmail(email)
      handleModal(true, 'list-updates')
    }
  }

  const generateTables = async () => {
    setIsLoading(true)
    if (activePage !== 'animal-control') setActivePage('animal-control')
    const getData = async () => {
      try {
        setWarningMessage('')
        const response = await getListAnimals({ farm:1 })
        if (response) {
          if (!response.data.animals.length > 0) {
            setWarningMessage('Ainda não existem animais cadastrados')
          }
          const rowsFatteningResponse = response.data.animals
            .filter(user => user.status = `fattening`)
            .map(user => {
              const { RealId, ageMonth, id, boughtAt, lastWeight} = user

              /**
                 email <> ok
                 createAndEditCampaing <> ok
                 salesVisualization <> ok
                 acessManagement <> ok
                 receivesControl <> ok
                 editHistory <> ok
                 */

              return {
                RealId:  (
                  <Text bold align="center" color={theme.colors.blue900} size="16px">
                    {(RealId) || '---'}
                  </Text>
                ),
                ageMonth: (
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
                    <BoxButton active={activePage === 'animal-control'} onClick={() => handleClick(`sell`,id)}>
                      <Sell />
                    </BoxButton>
                    <BoxButton
                      active={activePage === 'animal-control'}
                      onClick={() => handleClick(`delete`, id)}
                    >
                      <Trash />
                    </BoxButton>
                  </WrapperIcon>
                )
              }
            })

          const rowsDeactiveResponse = response.data.animals
          .filter(user => user.status = `sold`)
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
  }, [updateTable])

  const submitInativateUser = async () => {
    setIsLoading(true)
    const partnerEmployeeId = await asyncLocalStorage.getItem('partnerEmployeeId')
    const response = await updateUser({ partnerEmployeeId, active: false })
    // const { error } = response.data
    if (error) {
      showToast(`Error ao tentar inativar um usuário`)
    }
    setUpdateTable(true)
    setIsLoading(false)
    showToast(`Usuário inativado com sucesso`)
  }

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
    partnerEmployeeEmail,
    submitInativateUser
  ]
}
