/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FormCategory, FormClothe } from "./Form_Category";

const StyleModal = styled.div`
  
  position:fixed;
  display: flex;
  left:0;
  top:0;
  justify-content:center;
  align-items: center;
  width:100%;
  height: 100%;
  background: rgba(17, 16, 16, 0.75);
`



function Modal({type})
 {

  const setForm = {
    clothe: <FormClothe/>,
    category: <FormCategory/>
  }

  const element = setForm[type]


  return <StyleModal >
     {element}
    </StyleModal>;
}

export  {Modal};