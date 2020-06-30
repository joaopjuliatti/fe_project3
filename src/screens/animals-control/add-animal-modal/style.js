import styled from 'styled-components'

import { theme } from '../../../components/globalStyle'

export const Span = styled.span`
  color: ${theme.colors.blue600};
`

export const Button = styled.a`
  display: inline-block;
  border-radius: 6px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${theme.colors.blue800};
  color: white;
  border: 2px solid white;
  type : "submit";
` 

export const Section = styled.div`
  margin-bottom: 15px;
`

export const ContainerLogin = styled.div`
  width: 100%;

  ${theme.breakpoints.down('md')} {
    padding: 0 20px;
  }
`
export const ContainerText = styled.div``

export const Title = styled.div`
  font-size: 24px;
  line-height: 30px;
  font-family: 'CenturyGothicBold';
  color: ${theme.colors.pink900};
  margin-bottom: 30px;
`

export const Form = styled.form`
  margin-top: 34px;
  width: 100%;
  max-width: 400px;

  .MuiInput-underline:after {
    border-bottom: 1px solid #ffffff;
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid #ffffff;
  }

  .MuiFormControl-root {
    width: 100%;

    .MuiInput-root {
      margin-bottom: 8px;
    }
    &:after {
      border-bottom: 2px solid #ffffff;
    }
  }
`