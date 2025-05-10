import React from 'react'
import {
  VagaContainer,
  VagaTitulo,
  VagaLista,
  VagaItem,
  VagaLink
} from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
  href?: string
}

const Vaga = (props: Props) => (
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaLista>
      <VagaItem>Localização: {props.localizacao}</VagaItem>
      <VagaItem>Senioridade: {props.nivel}</VagaItem>
      <VagaItem>Tipo de contratação: {props.modalidade}</VagaItem>
      <VagaItem>
        Salário: {props.salarioMin} - {props.salarioMax}
      </VagaItem>
      <VagaItem>Requisitos: {props.requisitos.join(', ')}</VagaItem>
    </VagaLista>
    <VagaLink>{'Ver detalhes e candidatar-se'}</VagaLink>
  </VagaContainer>
)

export default Vaga
