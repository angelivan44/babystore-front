import styled from "@emotion/styled";
import { ContentSmall } from "../text/Text";
import { Logo } from "../UI/Logo";
import { ListIcons } from "./List_Icons";

const StyledFooter = styled.footer`
  position:relative;
  display: flex;
  width: 100%;
  height: 319px;
  gap:1%;
  align-items: center;
  background:black;
  padding: 23px 23px 58px 23px ;
  
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction:column;
  gap:10PX;
  width:300px;  
`
const StyleAndoid = styled.div`
@media (min-width: 420px) {
  display: none;}
`
const StyledContainer = styled.div`
@media (max-width: 420px) {
  display: none;}
  
`
const StyledConteinerText = styled.div`
  display: flex;
  gap:1%;
  padding: 10px 10px 10px 23px;
  @media (max-width: 420px) {
    display: none;}
  
`
const StyledDev = styled.div`
  position:absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction:column;
  left:50%;
  bottom:10px;
  @media (max-width: 420px) {
    display: none;}
`
function Footer() {
  return (
    <StyledFooter>
      <Logo type="white"></Logo>
      <StyleAndoid>
       <ListIcons type="social"></ListIcons>
      </StyleAndoid>
      <StyledContainer>
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
      
      
      </StyledContainer>
      <StyledDev>
          <ContentSmall>© 2021, Baby Guadalupe</ContentSmall>
          <ContentSmall>Desarrolado por Dev. Angel H. I.</ContentSmall>
      </StyledDev>

    </StyledFooter>
  )
}
export {Footer}