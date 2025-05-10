import styled from 'styled-components'

export const Form = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const Content = styled.div`
  position: relative;
  color: #eee;
  z-index: 2;
  text-align: center;
`

export const HeroTitle = styled.h1`
  font-family: Gloock, serif;
  font-size: 48px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
