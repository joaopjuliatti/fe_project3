import styled from 'styled-components'
import { theme } from '../globalStyle'

export const TextErrorInput = styled.p.attrs(() => ({
  cy: 'text-error'
}))`
  color: ${theme.colors.red100};
  font-size: 12px;
  margin: 0;
`
