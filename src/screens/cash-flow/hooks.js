/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { theme, Text } from '../../components/globalStyle'

import { getCashFlow, getFlowTypes, deleteCashFlow } from '../../services/api'

import { Trash } from '../../icons/svgs/trash'
import { asyncLocalStorage, formatDate } from '../../utils'
import { showToast } from '../../components/toast'

import { WrapperIcon, BoxButton } from './styles'

export const useCashFlow = (setIsLoading, goToPage, activePage, setActivePage, FarmId) => {

  const INITIAL_STATE = [
        { item: 'receiveOrPaidAt', label: 'Data da movimentação', show: true, blocked: true },
        { item: 'flowType', label: 'Tipo', show: true, blocked: true },
        { item: 'value', label: 'Valor a movimentação', show: true, blocked: true },
        { item: 'description', label: 'Descrição do Gasto', show: true, blocked: true },
        { item: 'editColumn', label: '', show: true, blocked: true }
    ]
  
  const [showCells, setShowCells] = useState(INITIAL_STATE)

  const [rows, setRows] = useState([])

  const [warningMessage, setWarningMessage] = useState('')

  const [initialDate, setInitialDate] = useState('')

  const [finalDate, setFinalDate] = useState('')

  const [updateTable, setUpdateTable] = useState(false)
  
  const [showAddCashActivityModal, setShowAddCashActivityModal] = useState(false)

  const [flowTypes, setFlowTypes] = useState([])

  const [pizzaChartData, setPizzaChartData] = useState([])

  const [barChartData, seBarChartData] = useState([])
  
  const handleModal = async (option) => {
    setUpdateTable(option)
    setShowAddCashActivityModal(option)
  }

const handleChange = (event,option) =>{
  if(option==='initialDate'){
    setInitialDate(event.target.value)
  }else if(option==='finalDate'){
    setFinalDate(event.target.value)
  }
}
const handleSubmit = event=>{
  event.preventDefault()
  setUpdateTable(true)
}

  const handleClick = async (option, id) => {
    setIsLoading(true)
    if (!option) return
    const token = await asyncLocalStorage.getItem('token')

    if (option === 'delete') {
      const response = await deleteCashFlow({CashFlowId:id},token)
      const { error } = response.data
      if (error) {
        showToast(`Error tentando deletar a movimentação`)
      } else {
        setUpdateTable(true)
        setIsLoading(false)
        showToast(`Movimentação deletada com sucesso`)
      }
      setIsLoading(false)
    } 
  }

  const generateSelectFlowTypes = async () =>{
    setIsLoading(true)
    if (activePage !== 'cash-flow') setActivePage('cash-flows')
    const getData = async () => {
      const token = await asyncLocalStorage.getItem('token')
      try {
        setWarningMessage('')
        const response = await getFlowTypes(token)
        const flowtypes = response.data.flowTypes
        setFlowTypes([...flowtypes])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        showToast('Ops, ocorreu um erro. Atualize essa página e entre em contato com João se o erro permanecer.')
        setIsLoading(false)
      }
    }
    getData()
  }

  const generateTables = async () => {
    setIsLoading(true)
    if (activePage !== 'cash-flow') setActivePage('cash-flows')
    const getData = async () => {
      const FarmId = await asyncLocalStorage.getItem('FarmId')
      const token = await asyncLocalStorage.getItem('token')
      try {
        setWarningMessage('')
        const response = await getCashFlow(FarmId,{
          initialDate,
          finalDate
      }, token)

        if (response) {
          if (!response.data.cashFlows.length) {
            setWarningMessage('Ainda não existem movimentações cadastradas')
          }
          const rows = response.data.cashFlows
            .map(cashFlow => {
              const { CashFlowId, receiveOrPaidAt, value, flowType, description } = cashFlow
              return {
                receiveOrPaidAt:  (
                  <Text bold align="center" color={theme.colors.blue900} size="16px">
                    {(formatDate(receiveOrPaidAt,false)) || '---'}
                  </Text>
                ),
                value:(
                  <Text bold align="center" color={theme.colors.blue900} size="16px">
                    {(value) || '---'}
                  </Text>
                ),
                flowType: (
                  <Text bold align="center" color={theme.colors.blue900} size="16px">
                    {(flowType) || '---'}
                  </Text>
                ),
                description:(
                  <Text bold align="center" color={theme.colors.blue900} size="16px">
                    {(description) || '---'}
                  </Text>
                ),
                editColumn: (
                  <WrapperIcon>
                    <BoxButton
                      active={activePage === 'cash-flow'}
                      onClick={() => handleClick(`delete`, CashFlowId)}
                    >
                      <Trash />
                    </BoxButton>
                  </WrapperIcon>
                )
              }
            })
            const tempObjtExpenses = {}
            response.data.cashFlows.filter(cashFlow=>{
              return !(parseFloat(cashFlow.value)>=0)
            }).map(cashFlow=>{
              if(tempObjtExpenses[cashFlow.flowType]) tempObjtExpenses[cashFlow.flowType] = tempObjtExpenses[cashFlow.flowType]+ Math.abs(parseFloat(cashFlow.value))
              else tempObjtExpenses[cashFlow.flowType] = Math.abs(parseFloat(cashFlow.value))
            })
            const keys = []
            let data = [['Depesas','Reais Gastos']]
            Object.keys(tempObjtExpenses).map(key=>{
              console.log(key)
              data.push([key,tempObjtExpenses[key]])
              keys.push(key)
            })
            setPizzaChartData(data)

            const tempObjtProfit = {}
            response.data.cashFlows.filter(cashFlow=>{
              return (parseFloat(cashFlow.value)>0)
            }).map(cashFlow=>{
              if(tempObjtProfit[cashFlow.flowType]) tempObjtProfit[cashFlow.flowType] = tempObjtProfit[cashFlow.flowType]+ Math.abs(parseFloat(cashFlow.value))
              else tempObjtProfit[cashFlow.flowType] = Math.abs(parseFloat(cashFlow.value))
            })

            data = []
            Object.keys(tempObjtProfit).map(key=>{
              if(!keys.includes(key)) keys.push(key)
            })
            keys.map(key=>{
              data.push([key,tempObjtProfit[key] ?tempObjtProfit[key] : 0, tempObjtExpenses[key] ?tempObjtExpenses[key] : 0])
            })
            if(data.length>0) data.unshift(['Tipo', 'Lucro', 'Despesa'])
            seBarChartData(data)
            setRows([...rows])
            setInitialDate('')
            setFinalDate('')
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
    generateSelectFlowTypes()
  }, [])


  useEffect(() => {
    setIsLoading(true)
    generateTables()
    setUpdateTable(false)
  }, [ FarmId ,updateTable])


  return [
    showCells,
    setRows,
    rows,
    warningMessage,
    handleModal,
    showAddCashActivityModal,
    handleChange,
    initialDate,
    finalDate,
    handleSubmit,
    flowTypes,
    setUpdateTable,
    pizzaChartData,
    barChartData
  ]
}
