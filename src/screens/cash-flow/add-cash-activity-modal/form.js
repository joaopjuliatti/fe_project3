/* eslint-disable react/prop-types */
import React from 'react'

import { Input,TextField, InputLabel, Select } from '@material-ui/core';

import { showToast } from '../../../components/toast'

import { addCashFlow } from '../../../services/api'
import { asyncLocalStorage } from '../../../utils'

import { ContainerText, Title, Form, ContainerModal, Section, Button, WrapperSelect } from './styles'

export class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
      flowType:'',
      FlowTypeId:'',
      value:'',
      receiveOrPaidAt:'',
      description:'',
    }};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }
  
  handleChange(event) {
    const values = this.state.values
    values[event.target.id] = event.target.value
    this.setState({values});
  }

    
  handleChangeSelect(event) {
    const values = this.state.values
    values.flowType = event.target.value
    this.setState({values});
  }

  handleSubmit = async (event) =>{
    event.preventDefault()
    this.props.setIsLoading(true)
    const { flowType, value, receiveOrPaidAt, description } = this.state.values
    if(!flowType || !value || !receiveOrPaidAt ){
      showToast('Favor Preencha todos os campos')
      this.props.setIsLoading(false)
      return false
    }
    const FarmId = await asyncLocalStorage.getItem("FarmId")
    try {
      const token = await asyncLocalStorage.getItem("token")
      const response = await addCashFlow({FarmId, flowType, value, receiveOrPaidAt, description},token)
      if (response.status !== 200) {
        this.props.setIsLoading(false)
        this.props.handleModal(false)
        showToast('Houve um  erro ao cadastrar nova movimentação')
        return false
      }
      this.props.setIsLoading(false)
      this.props.handleModal(false)
      this.props.setUpdateTable(true)
      showToast('Movimentação cadastrada com sucesso')
    } catch (error) {
      showToast('Houve um  erro ao cadastrar nova movimentação')
    }
  }
  render() {
  return (
    <>
      <ContainerModal>
        <ContainerText>
          <Title>Cadastrar nova movimentação</Title>
        </ContainerText>
        <Form onSubmit={this.handleSubmit}>
          <Section>
            <WrapperSelect>
              <InputLabel>Tipo</InputLabel>
                <Select
                onChange={this.handleChangeSelect}
                id='flowType'
                name='flowType'
                Prop
                value={this.state.values.flowType}
                PaperProps={{
                style: {
                  width: '150px',
                },
                }}
              > {
                  this.props.flowTypes.map(flowType =>{
                    return (
                        <option value={flowType.name}>{flowType.name}</option>
                      )
                  })
              }
              </Select>
            </WrapperSelect>
          </Section>
          <Section>
          <InputLabel>Valor da movimentação</InputLabel>
            <Input
              autoFocus
              id="value"
              placeholder="Valor"
              value={this.state.values.value}
              type="number"
              onChange={this.handleChange}
              fullWidth
              required
            />
          </Section>
          <Section>
          <InputLabel>Data da movimentação</InputLabel>
            <Input
              autoFocus
              id="receiveOrPaidAt"
              value={this.state.values.receiveOrPaidAt}
              type="date"
              onChange={this.handleChange}
              fullWidth
              required
            />
          </Section>
          <Section>
          <InputLabel>Descrição</InputLabel>
            <TextField
              id="description"
              multiline
              rowsMax={4}
              value={this.state.values.description}
              onChange={this.handleChange}
              variant="filled"
            />
          </Section>
          <Button onClick={()=>true}>Registrar nova movimentação</Button>
        </Form>
      </ContainerModal>
    </>
  )}
}
