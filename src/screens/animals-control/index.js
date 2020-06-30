import React, { useContext } from 'react'

import { theme } from '../../components/globalStyle'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { TemplateContext } from '~/components/Template/context'

import { InactivateUserModal } from './delete-modal'
import { ListUpdatesModal } from './list-updates-modal'

import { SimpleTable } from '~/components/table'
import { HeaderUserControl as Header } from '~/components/HeaderUserControl'
import { Text } from '~/themes/styles'

import { useListAnimals } from './hooks'
import { Content, ContainerTable, WrapperTabs } from './styles'

export const ListAnimals = () => {
  const { setIsLoading, goToPage, activePage, setActivePage } = useContext(TemplateContext)
  const [
    showCells,
    setRowsActive,
    rowsActive,
    setRowsDeactive,
    rowsDeactive,
    warningMessage,
    visibleOpt,
    setVisibleOpt,
    handleModal,
    showInativateUserModal,
    showListUpdatesModal,
    partnerEmployeeEmail,
    listUpdates,
    submitDeleteUser
  ] = useListAnimals(setIsLoading, goToPage, activePage, setActivePage)
  return (
    <>
      {showInativateUserModal && (
        <InactivateUserModal handleModal={handleModal} email={partnerEmployeeEmail} submitDeleteUser={submitDeleteUser} />
      )}
      {showListUpdatesModal && (
        <ListUpdatesModal handleModal={handleModal} listUpdates={listUpdates} email={partnerEmployeeEmail} />
      )}
      <Header addNewMember />
      <Content>
        <WrapperTabs id="wrapper-tabs">
          <Tabs selectedIndex={visibleOpt.tabIndex} onSelect={tabIndex => setVisibleOpt({ tabIndex })}>
            <TabList>
              <Tab>Usuários ativos</Tab>
              <Tab>Usuários inativos</Tab>
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
                      setRows={setRowsActive}
                      rows={rowsActive}
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
                      setRows={setRowsDeactive}
                      rows={rowsDeactive}
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
