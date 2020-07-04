/* eslint-disable react/prop-types */
import React from 'react'

import cep from 'cep-promise'

import { Input, InputLabel, Select  } from '@material-ui/core';

import { showToast } from '../../toast'

import { addFarm } from '../../../services/api'
import { asyncLocalStorage } from '../../../utils'


import { ContainerText, Title, Form, ContainerModal, Section, Button, WrapperAddressForm, WrapperSelect } from './styles'

export class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
      name:'',
      cepValue:'',
      street:'',
      number:'',
      complement:'',
      district:'',
      city:'',
      state:'',
      zipcode:'',
    },
    states : ["AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"],
    canShowAddress:false
  };

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

  handleOnBlur = async (event) =>{
    const { cepValue } = this.state.values
    const cepFormated = cepValue.split('-').join('')
    if(cepFormated===''){
      return false
    }
    try{
      this.props.setIsLoading(true)
      const response = await cep(cepFormated)
      console.log(response)
      const values = {
        street: response.street,
        district:response.neighborhood,
        zipcode:response.cep,
        city: response.city,
        state:response.state,
      }
      this.setState({values, canShowAddress:true});
      this.props.setIsLoading(false)
    }catch(error){
      console.log(error)
      showToast('CEP não encontrado, por favor tente novamente.')
      this.props.setIsLoading(false)
    }
  }

  handleSubmit = async (event) =>{
    event.preventDefault()
    this.props.setIsLoading(true)
    const { zipcode, name, street, number, complement, district, city, state } = this.state.values
    if(!zipcode || !name || !street || !number || !complement  || !district || !city   || !state )
    {
      this.props.setIsLoading(false)
      showToast('Favor Preencha todos os campos')
      return false
    }
    try {
      const token = await asyncLocalStorage.getItem("token")
      const response = await addFarm( {zipcode, name, street, number, complement, district, city, state}, token)
      if (response.status !== 200) {
        console.log(response.data)
        this.props.setIsLoading(false)
        this.props.handleModal(false)
        showToast('Houve um  erro ao cadastrar nova propriedade.')
        return false
      }
      this.props.setIsLoading(false)
      this.props.handleModal(false)
      showToast('Propriedade cadastrado com Sucesso')
    } catch (error) {
      showToast('Houve um  erro ao cadastrar nova propriedade')
    }
  }

  render() {
  return (
    <>
      <ContainerModal>
        <ContainerText>
          <Title>Cadastro Nova Propriedade</Title>
        </ContainerText>
        <Form onSubmit={this.handleSubmit}>
        <Section>
        <InputLabel>Nome da Propriedade</InputLabel>
            <Input
              autoFocus
              id="name"
              placeholder="Ex: Fazenda 3 Irmãos"
              value={this.state.values.name}
              type="text"
              onChange={this.handleChange}
              fullWidth
              required
            />
          </Section>
          <Section>
          <InputLabel>CEP</InputLabel>
            <Input
              autoFocus
              id="cepValue"
              placeholder="04538081"
              value={this.state.values.cepValue}
              type="text"
              onChange={this.handleChange}
              onBlur = {this.handleOnBlur}
              fullWidth
              required
            />
          </Section>
          {
            this.state.canShowAddress && (
            <WrapperAddressForm>
              <Section>
              <InputLabel>Rua</InputLabel>
              <Input
                autoFocus
                id="street"
                placeholder="Ex: Avenida Horacio Lafer"
                value={this.state.values.street}
                type="text"
                onChange={this.handleChange}
                fullWidth
                required
              />
            </Section>
            <Section>
            <InputLabel>Número</InputLabel>
              <Input
                autoFocus
                id="number"
                placeholder="Ex: 355"
                value={this.state.values.number}
                type="number"
                onChange={this.handleChange}
                fullWidth
                required
              />
            </Section>
            <Section>
            <InputLabel>Complemento</InputLabel>
              <Input
                autoFocus
                id="complement"
                placeholder="Apto 51"
                value={this.state.values.complement}
                type="text"
                onChange={this.handleChange}
                fullWidth
                required
              />
            </Section>
            <Section>
            <InputLabel>Bairro</InputLabel>
              <Input
                autoFocus
                id="district"
                placeholder="Ex Itaim Bibi"
                value={this.state.values.district}
                type="text"
                onChange={this.handleChange}
                fullWidth
                required
              />
            </Section>
            <Section>
            <InputLabel>Cidade</InputLabel>
              <Input
                autoFocus
                id="city"
                placeholder="Ex: São Paulo"
                value={this.state.values.city}
                type="text"
                onChange={this.handleChange}
                fullWidth
                required
              />
            </Section>
            <Section>
              <WrapperSelect>
                <InputLabel id="label-state">Estado</InputLabel>
                <Select
                labelId='label-state'
                value={this.state.values.state}
                onChange={this.handleChange}
                id='state'
              > 
              {
                  this.state.states.map(state =>{
                    if(this.state.state ===state){
                      return (
                        <option value={state} selected>{state}</option>
                      )
                    }
                    return (
                        <option value={state}>{state}</option>
                      )
                  })
              }
                </Select>
              </WrapperSelect>
            </Section>
          </WrapperAddressForm>
            )
          }
          <Button onClick={()=>true}>Registrar nova propriedade</Button>
        </Form>
      </ContainerModal>
    </>
  )}
}
