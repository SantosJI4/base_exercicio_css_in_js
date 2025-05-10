import styled from 'styled-components'

const Cabecalho = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid var(--cor-principal);

  h1 {
    font-size: 2.5rem;
    font-family: 'Gloock', serif;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin-top: 8px;
    color: rgba(0, 0, 0, 0.7);
  }
`

export default Cabecalho
