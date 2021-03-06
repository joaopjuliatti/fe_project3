import React, { useContext } from 'react'

import { theme } from '../../../components/globalStyle'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { TemplateContext } from '../../../components/Template/context'

import { AddAnimalModal } from './add-animal-modal'
import { PlusIcon } from '../../../icons/svgs/plus'

import { SimpleTable } from '../../../components/table'
import { Header } from '../../../components/Header'
import { Text } from '../../../components/globalStyle'

import { useListAnimals } from './hooks'
import { Content, ContainerTable, WrapperTabs, BoxButton, WrapperIcon } from './styles'

export const ListAnimals = () => {
  const { setIsLoading, goToPage, activePage, setActivePage, FarmId } = useContext(TemplateContext)
  const [
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
  ] = useListAnimals(setIsLoading, goToPage, activePage, setActivePage, FarmId)

  return (
    <>
      {showAddAnimalModal && (
        <AddAnimalModal handleModal={handleModal} setIsLoading={setIsLoading} />
      )}
      <Header showLinks>
      {(  
        <WrapperIcon>
          <BoxButton active={activePage === 'animal-control/list-animals'} onClick={() => handleModal(true)}>
              <PlusIcon color={theme.colors.pink900} />
              {'Adicionar Animal'}
            </BoxButton>
        </WrapperIcon>
        )}

      </Header>
      <Content>
        <WrapperTabs id="wrapper-tabs">
          <Tabs selectedIndex={visibleOpt.tabIndex} onSelect={tabIndex => setVisibleOpt({ tabIndex })}>
            <TabList>
              <Tab>Animais para Engorda</Tab>
              <Tab>Animais Vendidos</Tab>
            </TabList>
            <TabPanel>
              <>
                <ContainerTable>
                  {warningMessage ? (
                    <Text bold align="center" color={theme.colors.blue900} mTop="30px" size="24px">
                      {warningMessage}
                    </Text>
                  ) : (
                    <SimpleTable
                      origin="users"
                      setRows={setRowsFattening}
                      rows={rowsFattening}
                      showCells={showCells}
                      headAlign="center"
                      headColor="#F8F5F5"
                    />
                  )}
                </ContainerTable>
              </>
            </TabPanel>
            <TabPanel>
              <>
                <ContainerTable>
                  {warningMessage ? (
                    <Text bold align="center" color={theme.colors.blue900} mTop="30px" size="24px">
                      {warningMessage}
                    </Text>
                  ) : (
                    <SimpleTable
                      origin="users"
                      setRows={setRowsSold}
                      rows={rowsSold}
                      showCells={showCells}
                      headAlign="center"
                      headColor="#F8F5F5"
                    />
                  )}
                </ContainerTable>
              </>
            </TabPanel>
          </Tabs>
        </WrapperTabs>
      </Content>
    </>
  )
}
