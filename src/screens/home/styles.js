import styled from 'styled-components'
import { theme } from '../../components/globalStyle'

export const Header = styled.div`
  height: 64px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.grey400};
`

export const Container = styled.div`
  background-color: #e5e5e5;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Content = styled.div`
  margin-top: 150px;
  text-align: center;
`

export const RedTitle = styled.div`
  font-size: 30px;
  line-height: 36px;
  color: ${theme.colors.pink850};
  font-family: 'CenturyGothicBold';

`

export const PartnerName = styled.div`
  font-size: 30px;
  line-height: 36px;
  margin-top: 10px;
  color: ${theme.colors.blue900};
`

export const WrapperOptions = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`

export const WrapperLogout = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

export const BoxOption = styled.div`
  width: 225px;
  height: 170px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);

  padding: 25px;

  font-size: 20px;
  line-height: 25px;
  font-family: 'CenturyGothicBold';
  color: ${theme.colors.blue700};

  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  cursor: pointer;
  margin: 10px;

  position: relative;
`

export const WrapperIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 112px;
`

export const WrapperText = styled.div``

export const TextLink = styled.div`
  font-family: 'CenturyGothicBold';
  font-size: 25px;
  width: 85px;
  color: ${theme.colors.pink850};
  border-bottom: 2px solid ${theme.colors.pink850};
  line-height: 20px;
`