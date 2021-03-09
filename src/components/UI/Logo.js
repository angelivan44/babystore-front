import { css } from "@emotion/react";
import styled from "@emotion/styled";
import logo from './../../assets/logo.svg'
import logow from './../../assets/logo-white.svg'
import hero from './../../assets/hero.png'

const StyleDiv = styled.img`
  width: 212px;
  height: 100px;
  object-fit: cover;
  transition: all 300ms;
  &:hover{
    transform: scale(1.1);
  }
`
const setLogo ={
  normal :logo,
  white : logow,
  hero : hero,
}
function Logo({type}) {
  return (
    <StyleDiv src={setLogo[type]}></StyleDiv>
  )
}

export {Logo}