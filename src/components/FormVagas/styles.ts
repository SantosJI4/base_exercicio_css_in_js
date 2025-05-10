import styled from 'styled-components'
import React from 'react'

export const StyledForm = styled.form.attrs(
  (props: React.HTMLAttributes<HTMLFormElement>) => props
)`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const BtnPesquisar = styled.button.attrs(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => props
)`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

export const Input = styled.input.attrs(
  (props: React.InputHTMLAttributes<HTMLInputElement>) => props
)`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`
