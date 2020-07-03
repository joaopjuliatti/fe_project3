import styled from 'styled-components'
import { theme } from '../globalStyle'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 81px;
  background-color: ${theme.colors.blue700};
  z-index: 10;

  display: flex;
  align-items: center;
`

export const ListButton = styled.div`
  background: ${theme.colors.grey500};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  height: 40px;
  width: 40px;

  margin-right: 10px;
  margin-left: 10px;

  font-family: 'CenturyGothicBold';

  &:hover {
    opacity: 0.9;
  }
`

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BoxButton = styled.div`
  height: inherit;
  /* width: 80px; */
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 9px;
  border-radius: 20px;
  padding: 0 15px;

  /* font */
  font-family: ${({ active }) => (active ? 'CenturyGothicBold' : 'CenturyGothic')};
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.pink900};
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`



export const WrapperTextLink = styled.div`
`

export const TextLink = styled.div`
  font-family: 'CenturyGothicBold';
  margin: 0 auto;
  position: relative;
  color: ${theme.colors.white100};
  border-bottom: ${({active}) => (active ? '2px solid red' : 'none')};
`

export const WrapperLinks = styled.div`
  width:30%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`
export const Button = styled.button`
  width:100%;
  height:100%;
  display: inline-block;
  border-radius: 6px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${({colorInvert})=> (colorInvert ? theme.colors.blue700 : theme.colors.white100)};
  color:  ${({colorInvert})=> (colorInvert ? theme.colors.white100 : theme.colors.blue700)};;
  border: 2px solid white;
  type:"submit";
  `