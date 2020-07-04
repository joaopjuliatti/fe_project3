import React, { useContext } from 'react'
import Chart from "react-google-charts";

import { theme } from '../../components/globalStyle'
import { TemplateContext } from '../../components/Template/context'

import { Input, InputLabel  } from '@material-ui/core';

import { PlusIcon } from '../../icons/svgs/plus'
import { AddCashActivityModal } from './add-cash-activity-modal'

import { SimpleTable } from '../../components/table'
import { Header } from '../../components/Header'
import { Text } from '../../components/globalStyle'

import { useCashFlow } from './hooks'
import { Content, ContainerTable, BoxButton, WrapperIcon, Section, FormDate, Button, WrapperGraphs, GraphSection } from './styles'

export const CashFlow = () => {
  const { setIsLoading, goToPage, activePage, setActivePage, FarmId } = useContext(TemplateContext)
  const [
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
  ]= useCashFlow(setIsLoading, goToPage, activePage, setActivePage, FarmId)

  return (
    <>
      { showAddCashActivityModal && <AddCashActivityModal handleModal={handleModal} setIsLoading={setIsLoading} flowTypes={flowTypes} setUpdateTable={setUpdateTable} />}
      <Header showLinks>
      {(  
        <WrapperIcon>
          <BoxButton active={activePage === 'cash-flow'} onClick={() => handleModal(true)}>
              <PlusIcon color={theme.colors.pink900} />
              {'Adicionar Gasto'}
            </BoxButton>
        </WrapperIcon>
        )}
      </Header>
      <Content>
        <WrapperGraphs>
          {pizzaChartData.length>1 && (<GraphSection id='HistogramGraph'>
          <Chart
            width={'800px'}
            height={'500px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={pizzaChartData}
            options={{
              title: 'Despesas no Acumaladas em Percentual',
              is3D: true,
            }}
            />
          </GraphSection>)}
          {barChartData.length>=1 && (<GraphSection>
          <Chart
            width={'800px'}
            height={'500px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={barChartData}
            options={{
              title: 'Valor absoluto dos diferentes tipos de movimentação',
              chartArea: { width: '50%' },
              hAxis: {
                title: 'Reais',
                minValue: 0,
              },
              vAxis: {
                title: 'Tipos de Movimentações',
              },
            }}
          />
          </GraphSection>)}
        </WrapperGraphs>
        <FormDate onSubmit={handleSubmit}>
            <Section>
              <InputLabel>Data Inicial</InputLabel>
                <Input
                  autoFocus
                  id="initialDate"
                  value={initialDate}
                  type="date"
                  onChange={event=>handleChange(event,'initialDate')}
                />
            </Section>
            <Section>
              <InputLabel>Data Inicial</InputLabel>
                <Input
                  autoFocus
                  id="finalDate"
                  value={finalDate}
                  type="date"
                  onChange={event=>handleChange(event,'finalDate')}
                />
              </Section>
              <Button onClick={()=>true}>Buscar Fluxo de Gastos</Button>
          </FormDate>
        <ContainerTable>
          {warningMessage ? (
            <Text bold align="center" color={theme.colors.blue900} mTop="30px" size="24px">
              {warningMessage}
            </Text>
          ) : (
            <SimpleTable
              origin="users"
              setRows={setRows}
              rows={rows}
              showCells={showCells}
              headAlign="center"
              headColor="#F8F5F5"
            />
          )}
        </ContainerTable>
      </Content>
    </>
  )
}
