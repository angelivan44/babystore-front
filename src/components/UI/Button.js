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
}


const StyledButton = styled.button`
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 30px;
  height: 36px;
  gap:5px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    svg {
      fill:green;
    }
  }
  ${(prop) => setColor[prop.type]}
`;


function Button({type}) {
  return <StyledButton type={type}>
    <Icon 
    type={setIcon[type]} 
    fill={"black"} 
    size={20}>
    </Icon>
    <ContentButton>{setButton[type]}</ContentButton>
    </StyledButton>;
}

export  {Button};