import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ListItem } from "../text/Item";
import { Logo } from "../UI/Logo";
import { ListIcons } from "./List_Icons";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  gap:10%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 58px 0px 58px;
  
`
const dataHeader = ["INICIO","COLECCIONES", "PREGUNTAS FRECUENTES"]
function Header() {
  return (
    <StyledNav>
      <Logo type="normal"></Logo>
      <ListItem list={dataHeader}></ListItem>
      <ListIcons type="header"></ListIcons>
    </StyledNav>
  )
}
export {Header}