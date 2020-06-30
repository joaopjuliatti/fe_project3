import styled from 'styled-components'

import { theme } from '../../components/globalStyle'

export const Content = styled.div`
  margin-top: 81px;
  height: calc(100vh - 81px);
  ${theme.breakpoints.down('md')} {
    width: 100%;
    height: calc(100% - 81pxpx);
  }
`
export const ContainerTable = styled.div`
  height: calc(100vh - 191px) !important;
  width: 100vw;

  ${theme.breakpoints.down('md')} {
    /* padding: 0 20px; */
  }
`
export const WrapperText = styled.div`
  display: inline-block;
  max-width: 200px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const WrapperOrigin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* cursor: pointer; */
`
export const CheckBox = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid ${({ isActivated }) => (isActivated ? `${theme.colors.grey600}` : `${theme.colors.blue900}`)};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;
`

export const Active = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;

  border: 1px solid ${({ isActivated }) => (isActivated ? `${theme.colors.grey600}` : `${theme.colors.pink900}`)};
  background-color: ${({ isActivated }) => (isActivated ? `${theme.colors.grey600}` : `${theme.colors.pink900}`)};
`

export const WrapperTabs = styled.div`
  padding-top: 50px;
  justify-content: center;
  background-color: #f8f5f5;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  
  ul {
    text-align: center;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #cfcfcf;
    margin-bottom: 15px;
    ${theme.breakpoints.down('md')} {
    background-color: #f8f5f5;
  };
    .react-tabs__tab {
      width: 25%;
      font-size: 16px !important;
      line-height: 24px !important;
      font-family: 'CenturyGothic';
      color: ${theme.colors.blue900};
    }

    .react-tabs__tab--selected {
      border: none;
      border-bottom: 5px solid ${theme.colors.pink900};
      background-color: #f8f5f5;
      font-family: 'CenturyGothicBold';
    }

    .react-tabs__tab:focus {
      border-bottom: 5px solid ${theme.colors.pink900};
      box-shadow: none !important;
      outline: none !important;
    }
    .react-tabs__tab:focus:after {
      position: unset;
    }
  }

`
export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* cursor: pointer; */
`
export const ButtonOutline = styled.div`
  cursor: pointer;
  font-size: 16px;
  line-height: 30px;
  font-family: 'CenturyGothicBold';
  background-color: ${theme.colors.pink900};
  color: ${theme.colors.grey400};
  padding: 6px 15px;
  /* width: 140px; */
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 12px;
  }
`
export const BoxButton = styled.div`
  height: inherit;
  /* width: 80px; */
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  /* font */
  font-family: ${({ active }) => (active ? 'CenturyGothicBold' : 'CenturyGothic')};
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.pink900};
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`

export const WrapperTextLink = styled.div`
  display: flex;
  justify-content: center;

  h5 {
    color: ${theme.colors.blue900};
    font-size: 12px;
    line-height: 16px;
    margin: 0;
  }
`
