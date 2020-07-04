import styled, { keyframes } from 'styled-components'
import { theme } from '../globalStyle'

const opacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Overlay = styled.div`
  align-items: center;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  display: flex;
  -webkit-animation-name: ${opacity};
  -webkit-animation-duration: 0.25s;
  animation-name: ${opacity};
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
`

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

export const Container = styled.div`
  position: relative;
  border-radius: ${({ radius }) => (radius ? `${radius}px` : '20px')};
  max-width: 800px;
  min-height: ${({ isWithoutHeight }) => (isWithoutHeight ? 'unset' : '600px')};
  width: ${({ width }) => width || '90%'};
  z-index: 15;
  height: ${({ isWithoutHeight }) => (isWithoutHeight ? 'unset' : 'unset')};
  top: ${({ isWithoutHeight }) => (isWithoutHeight ? '50px' : 'unset')};
  max-height: 90vh;
  margin-top: 20px;
  box-sizing: border-box;
  background: white;
  display: flex;
  overflow: auto;
  flex-direction: column;
  padding: 25px;
  animation-name: ${scale};
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
`

export const Header = styled.div`
  position: relative;
`
export const Body = styled.div`
  position: relative;
  margin-bottom: 20px;
`

export const Content = styled.div`
`

export const Title = styled.h3`
  font-family: CenturyGothicBold, sans-serif;
  color: ${theme.colors.blue900};
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`

export const CloseModalWrapper = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: flex-end;
  z-index: 100;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
