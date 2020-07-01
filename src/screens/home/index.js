import React, { useContext } from 'react'
import { theme,Text } from '../../components/globalStyle'

import { TemplateContext } from '../../components/Template/context'
import { Header } from '../../components/Header'

import { Cow } from '../../icons/svgs/cow'
import { Money } from '../../icons/svgs/money'

import {
  Container,
  RedTitle,
  WrapperOptions,
  Content,
  WrapperLogout,
  BoxOption,
  WrapperIcon,
  WrapperText
} from './styles'
import { useHome } from './hooks'

export const Home = () => {
  const { setIsLoading, goToPage, setActivePage } = useContext(TemplateContext)
  const [handlePage] = useHome(setIsLoading, goToPage, setActivePage)

  return (
    <>
        <>
          <Header>
          </Header>
          <Container>
            <Content>
              <RedTitle>Plataforma de Controle Rural</RedTitle>
              <WrapperOptions>
                <BoxOption onClick={() => handlePage('animals-control/list-animals')}>
                  <WrapperIcon>
                    <Cow />
                  </WrapperIcon>
                  <WrapperText>
                    <Text size="20px" lineHeight="25px" bold mBottom="15px" color={theme.colors.blue900}>
                      Gerencie seus animais
                    </Text>
                    <Text size="12px" lineHeight="18px" color={theme.colors.blue800}>
                      Crie e delete animais
                    </Text>
                    <Text size="12px" lineHeight="18px" color={theme.colors.blue800}>
                      Acompanhe o rendimento de engorda
                    </Text>
                    <Text size="12px" lineHeight="18px" color={theme.colors.blue800}>
                      Veja seu histórico de vendas
                    </Text>
                  </WrapperText>
                </BoxOption>
                <BoxOption onClick={() => handlePage('cash-flow')}>
                  <WrapperIcon>
                    <Money />
                  </WrapperIcon>
                  <WrapperText>
                    <Text size="20px" lineHeight="25px" bold mBottom="15px" color={theme.colors.blue900}>
                      Gerencie seus gastos
                    </Text>
                    <Text size="12px" lineHeight="18px" color={theme.colors.blue800}>
                      Veja despesas e ganhos da fazenda
                    </Text>
                  </WrapperText>
                </BoxOption>
              </WrapperOptions>
              <WrapperLogout>
                {/* <TextLink text="Logout" color={theme.colors.pink900} onClick={() => handleLogoutModal(true)} /> */}
              </WrapperLogout>
            </Content>
          </Container>
        </>
    </>
  )
}
