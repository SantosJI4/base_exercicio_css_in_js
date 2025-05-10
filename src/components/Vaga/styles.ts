import styled from 'styled-components'

export const VagaContainer = styled.li`
  list-style: none;
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fefefe;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`

export const VagaTitulo = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 12px;
  color: #222;
  font-weight: bold;
`

export const VagaLista = styled.ul`
  padding: 0;
  margin: 0 0 20px 0;
  list-style: none;
`

export const VagaItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: #444;
`

export const VagaLink = styled.a`
  display: inline-block;
  margin-top: 12px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`
