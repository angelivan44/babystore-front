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
  ${prop => prop.hero === "hero" ? css`
  width: 100%;
  height: 100%;
  `: "" }
  ${prop => prop.hero === "normal" ? css`
  &:hover{
    transform: scale(1.1);
  }
  `:"" }
`
const setLogo ={
  normal :logo,
  white : logow,
  hero : hero,
}
function Logo({type}) {
  return (
    <StyleDiv src={setLogo[type]} hero={type}></StyleDiv>
  )
}

export {Logo}