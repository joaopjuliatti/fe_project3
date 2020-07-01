/* eslint-disable react/prop-types */
import React from 'react'

import { Input } from '@material-ui/core';

import { TextErrorInput } from '../../../../components/text-error-input'
import { showToast } from '../../../../components/toast'

import { addAnimal } from '../../../../services/api'
import { asyncLocalStorage } from '../../../../utils'

import { ContainerText, Title, Form, ContainerModal, Section, Button } from './styles'

export class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {values: {
      RealId:'',
      initialAge:'',
      boughtAt:'',
      initialWeight:'',
    }};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const values = this.state.values
    if( event.target.value < 0) {
      values[event.target.id] = 0
    }
    else{
      values[event.target.id] = event.target.value
    }
    this.setState({values});
  }

  handleSubmit = async (event) =>{
    event.preventDefault()
    this.props.setIsLoading(true)
    const { RealId, initialAge, boughtAt, initialWeight } = this.state.values
    if(!RealId || !initialAge || !boughtAt || !initialWeight ){
      showToast('Favor Preencha todos os campos')
      return false
    }
    const FarmId = await asyncLocalStorage.getItem("FarmId")
    try {
      const token = await asyncLocalStorage.getItem("token")
      const response = await addAnimal({RealId,FarmId,initialAge,boughtAt, initialWeight},token)
      if (response.status !== 200) {
        this.props.setIsLoading(false)
        this.props.handleModal(false)
        showToast('Houve um  erro ao cadastrar novo animal')
        return false
      }
      this.props.setIsLoading(false)
      this.props.handleModal(false)
      showToast('Animal Cadastrado com Sucesso')
    } catch (error) {
      showToast('Houve um  erro ao cadastrar novo animal')
    }
  }
  render() {
  return (
    <>
      <ContainerModal>
        <ContainerText>
          <Title>Cadastro Novo Animal</Title>
        </ContainerText>
        <Form onSubmit={this.handleSubmit}>
          <Section>
            <Input
              autoFocus
              id="RealId"
              placeholder="Número de registro do animal"
              value={this.state.values.RealId}
              type="number"
              onChange={this.handleChange}
              fullWidth
              required
            />
          </Section>
          <Section>
            <Input
              autoFocus
              id="initialAge"
              placeholder="Idade inicial do animal(meses)"
              value={this.state.values.initialAge}
              type="number"
              onChange={this.handleChange}
              fullWidth
              required
            />
          </Section>
          <Section>
            <Input
              autoFocus
              id="boughtAt"
              placeholder="Data de aquisição/nascimento do animal"
              value={this.state.values.boughtAt}
              type="date"
              onChange={this.handleChange}
              fullWidth
              required
            />
          </Section>
          <Section>
            <Input
              autoFocus
              id="initialWeight"
              placeholder="Peso inicial do animal"
              value={this.state.values.initialWeight}
              type="number"
              onChange={this.handleChange}
              fullWidth
              required
            />
          </Section>
          <Button onClick={()=>true}>Registrar novo Animal</Button>
        </Form>
      </ContainerModal>
    </>
  )}
}
