/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Content, ContentButton, ContentSub } from "../text/Text";
import { Icon } from "./Icon";

const backAdd = css`
  background: var(--aqua);
`

const backBuy = css`
  background: var(--yellow);
`
const backSubmit = css`
  background: var(--submit);
`
const setButton = {
  add : "AÑADIR A CARRITO",
  buy : "COMPRAR",
}
const setIcon = {
  add : "cart",
  buy : "arrow"
}

const setColor = {
  add : backAdd,
  buy : backBuy,
  Submit:backSubmit,
}


const StyledButton = styled.button`
  
  display: flex;
  justify-content: center;
  padding:2px 5px;
  align-items: center;
  gap:5px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
  line-height: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    svg {
      fill:green;
    }
  }
  ${(prop) => setColor[prop.type]? setColor[prop.type]:backBuy}
`;


function Button({type , history, onClick}) {
  return <StyledButton type={type} onClick={onClick}>
    {setIcon[type] && <Icon 
    type={setIcon[type]} 
    fill={"black"} 
    size={22}>
    </Icon>}
    <ContentButton>{setButton[type]? setButton[type]: type}</ContentButton>
    </StyledButton>;
}

export  {Button};