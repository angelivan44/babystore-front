import styled from "@emotion/styled";
import { Link } from "react-router-dom";
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
function Header() {
  return (
    <StyledNav>
      <Link to="/">
      <Logo type="normal"></Logo>
      </Link> 
      <ListItem type={"header"}></ListItem>
      <ListIcons type="header"></ListIcons>
    </StyledNav>
  )
}
export {Header}