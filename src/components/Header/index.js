import React, { useContext } from 'react'
import { theme, Text } from '../globalStyle'

import { Home } from '../../icons/svgs/home'

import { TemplateContext } from '../../components/Template/context'

import { Wrapper, ListButton, Container, WrapperTextLink, TextLink, WrapperLinks } from './styles'
import { useHeader } from './hooks'

export const Header = props => {
    const {children, showLinks } = props
    const { goToPage, activePage, setActivePage } = useContext(TemplateContext)
    const [handlePage] = useHeader(goToPage, activePage, setActivePage)

  return (
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
      </Container>
    </Wrapper>
  )
}
