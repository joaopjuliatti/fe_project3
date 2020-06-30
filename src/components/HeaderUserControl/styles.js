import styled from 'styled-components'
import { theme } from '../globalStyle'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 81px;
  background-color: ${theme.colors.blue900};
  z-index: 10;

  display: flex;
  align-items: center;
`

export const ListButton = styled.div`
  background: ${theme.colors.grey400};
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

  ${theme.breakpoints.down('md')} {
    height: 40px;
    width: 40px;
    margin-right: 10px;
    padding: unset;

    svg {
      margin-right: unset;
    }
  }
`
