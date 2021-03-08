import { css } from "@emotion/react";
import styled from "@emotion/styled";
import logo from './../../assets/logo.svg'
import logow from './../../assets/logo-white.svg'
import hero from './../../assets/hero.png'

const StyleDiv = styled.div`
  width: auto;
  height: auto;
  object-fit: cover;
`
const setLogo ={
  normal :logo,
  white : logow,
  hero : hero,
}
function Logo({type}) {
  return (
    <StyleDiv><img src={setLogo[type]}/></StyleDiv>
  )
}

export {Logo}