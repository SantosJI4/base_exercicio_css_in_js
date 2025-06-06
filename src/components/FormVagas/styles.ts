import styled from 'styled-components'

export const StyledForm = styled.form.attrs(
  (props: React.HTMLAttributes<HTMLFormElement>) => props
)`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisar = styled.button.attrs(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => props
)`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

export const Input = styled.input.attrs(
  (props: React.InputHTMLAttributes<HTMLInputElement>) => props
)`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
