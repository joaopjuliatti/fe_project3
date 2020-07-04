import styled from 'styled-components'
import { theme } from '../../components/globalStyle'

export const Section = styled.div`
  margin-bottom: 15px;
`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content:center;
  background: ${theme.colors.grey600};
`
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 30%;
  align-items: center;
  justify-content:center;
  border-radius:40px;
  background: ${theme.colors.grey400};
`


export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
`

export const Title = styled.div`
  font-size: 24px;
  line-height: 30px;
  font-family: 'CenturyGothicBold';
  color: ${theme.colors.pink800};
`

export const Form = styled.form`
  align-items: center;
  flex-direction: column;
  display: flex; 
  margin-top: 34px;
  width: 100%;
  max-width: 400px;
  justify-content:center;


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
export const Button = styled.button`
  display: inline-block;
  border-radius: 6px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${theme.colors.blue700};
  color: white;
  border: 2px solid white;
  type : "submit";
  align-items:center
`
