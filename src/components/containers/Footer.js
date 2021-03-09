import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ListItem } from "../text/Item";
import { ContentSmall } from "../text/Text";
import { Icon } from "../UI/Icon";
import { Logo } from "../UI/Logo";
import { ListIcons } from "./List_Icons";

const StyledFooter = styled.footer`
  position:relative;
  display: flex;
  width: 100%;
  height: 319px;
  gap:10%;
  align-items: center;
  background:black;
  padding: 23px 23px 58px 23px ;
  
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction:column;
  gap:10PX;
  padding: 23px 23px 58px 23px;
  
`
const StyledConteinerText = styled.div`
  display: flex;
  gap:10%;
  padding: 23px 23px 58px 23px;
  
`
const StyledDev = styled.div`
  position:absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction:column;
  left:50%;
  bottom:10px;
`
const dataHeader = ["INICIO","COLECCIONES", "PREGUNTAS FRECUENTES"]
function Footer() {
  return (
    <StyledFooter>
      <Logo type="white"></Logo>
      <div>
      <StyledConteinerText>
        <StyledDiv>
          <ContentSmall>BACKSTORE</ContentSmall>
          <ContentSmall>La Merced Chanchamayo</ContentSmall>
        </StyledDiv>
        <StyledDiv>
          <ContentSmall>LEGAL</ContentSmall>
          <ContentSmall>Política de Devoluciones, Cambios y Reembolsos</ContentSmall>
          <ContentSmall>Política de Privacidad</ContentSmall>
          <ContentSmall>Términos y condiciones</ContentSmall>
        </StyledDiv>
        <StyledDiv>
          <ContentSmall>AYUDA</ContentSmall>
          <ContentSmall>Contáctenos</ContentSmall>
          <ContentSmall>Preguntas frecuentes</ContentSmall>
        </StyledDiv>
        <StyledDiv>
          <ContentSmall>SOCIAL</ContentSmall>
          <ListIcons type="social"></ListIcons>
        </StyledDiv>
        
      </StyledConteinerText>
      </div>
      <StyledDev>
          <ContentSmall>© 2021, Baby Guadalupe</ContentSmall>
          <ContentSmall>Desarrolado por Dev. Angel H. I.</ContentSmall>
      </StyledDev>

    </StyledFooter>
  )
}
export {Footer}