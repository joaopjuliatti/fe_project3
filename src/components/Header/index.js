import React, { useContext } from 'react'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Home } from '../../icons/svgs/home'

import { TemplateContext } from '../Template/context'
import { MenuFarm } from '../MenuFarm'

import { Wrapper, ListButton, Container, WrapperTextLink, TextLink, WrapperLinks, Button } from './styles'
import { useHeader } from './hooks'
import { AddFarmModal } from './add-farm-modal'


export const Header = props => {
    const {children, showLinks } = props
    const { goToPage, activePage, setActivePage, setIsLoading, handleFarmIdUpdate } = useContext(TemplateContext)
    const [
            handlePage,
            showAddFarmModal,
            handleModal,
            anchorEl,
            handleClickMenu,
            handleCloseMenu,
            farmName,
            farmAnchorEl,
            farms,
            handleClickMenuFarm,
            handleCloseMenuFarm,
            handleClickItemFarm,
            setUpdateFarms
           ] = useHeader(goToPage, activePage, setActivePage, setIsLoading, handleFarmIdUpdate)

  return (
    <>
    {showAddFarmModal && <AddFarmModal handleModal={handleModal} setIsLoading={setIsLoading} setUpdateFarms={setUpdateFarms}/>}
    <Wrapper>
      <Container>
        <ListButton single onClick={() => handlePage('home')}>
          <Home />
        </ListButton>
        {
          showLinks && (
            <WrapperLinks>
              <WrapperTextLink>
                <TextLink active={activePage ==='animals-control/list-animals'} onClick={() => handlePage('animals-control/list-animals')}>
                  Controle de Animais
                </TextLink>
              </WrapperTextLink>
              <WrapperTextLink>
                <TextLink active={activePage ==='cash-flow'} onClick={() => handlePage('cash-flow')}>
                  Controle de Gastos
                </TextLink>
              </WrapperTextLink>
            </WrapperLinks>
          ) 
        }
        {children}
        <Button onClick={handleClickMenu}>{farmName}</Button>
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem>
            <Button colorInvert onClick={()=>handleModal(true)}>Adicionar nova propriedade</Button>
          </MenuItem>
          <MenuItem>
            <Button  colorInvert onClick={()=>handleClickMenuFarm()}>Trocar Propriedade</Button>
          </MenuItem>
        </Menu>
        <MenuFarm 
          anchorEl={farmAnchorEl}
          handleClose={handleCloseMenuFarm}
          handleClick={handleClickItemFarm}
          Farms={farms}
          />
      </Container>
    </Wrapper>
    </>
  )
}
