import styled, { css } from 'styled-components'
import { theme } from '../globalStyle'

export const ContainerTableMobile = styled.div`
  /* border: 1px solid red; */
`

export const TableMobile = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
`

export const Head = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  height: 50px;
  background-color: #ebebeb;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'static')};
  z-index: 2;
`
export const Body = styled.div`
  /* border: 1px solid purple; */
  width: 100%;
`

export const Row = styled.div`
  /* border: 3px solid skyblue; */
  width: 100%;
  height: inherit;
`

export const ContentRow = styled.div`
  cursor: ${({ head }) => (head ? 'default' : 'pointer')};
  display: flex;
  justify-content: space-around;
  height: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: ${({ disabledInformation }) => (disabledInformation ? '1px solid #cfcfcf' : 'unset')};
`

export const Cell = styled.div`
  /* border: 1px solid black; */

font-family: ${({ normal }) => (normal ? 'CenturyGothic' : 'CenturyGothicBold')};
  color: ${({ head }) => (head ? theme.colors.grey600 : theme.colors.blue900)};
  width: ${({ width }) => width || 'auto'};
  padding: ${({ head }) => (head ? '0 0 0 10px' : 'unset')};
  /* text-align: ${({ align }) => align || 'left'}; */

  ${theme.breakpoints.down('md')} {}  

  ${({ align }) =>
    align &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`

export const Indicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`

export const SectionInformation = styled.div`
  padding: 5px 20px;
  margin-bottom: 20px;
`

export const Information = styled.div`
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  transition: display 2000ms;
  border-bottom: 1px solid #cfcfcf;
`

export const Text = styled.div`
  color: ${theme.colors.grey600};
  font-family: 'CenturyGothicBold';
`
export const Value = styled.div`
  color: ${theme.colors.blue900};
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
`

export const WrapperLabel = styled.div`
  display: inline-block;
  margin-left: 10px;
`
export const WrapperHeadButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  cursor: ${({ head }) => (head ? 'default' : 'pointer')};
  display: flex;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.grey400};;
  border-bottom: ${({ disabledInformation }) => (disabledInformation ? '1px solid #cfcfcf' : 'unset')};

`
export const HeadSecond = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  height: 150px;
  background-color: ${theme.colors.grey400};
  position: ${({ fixed }) => (fixed ? 'fixed' : 'static')};
  z-index: 2;
  margin-bottom: 20px;
`
