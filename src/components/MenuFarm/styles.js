import styled from 'styled-components'
import { theme } from '../globalStyle'



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