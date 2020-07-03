import styled from 'styled-components'
import { theme } from '../globalStyle'

export const Button = styled.button`
  display: inline-block;
  border-radius: 6px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${theme.colors.blue700};
  color: white;
  border: 2px solid white;
  type:"submit";
  `