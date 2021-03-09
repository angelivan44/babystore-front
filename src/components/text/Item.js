
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const StyleBackgroundSelect = css`
  font-family: var(--thirth-font);
  color: #FFFFFF; 
  background: #2D2F39;

`
const Styledul = styled.ul`
  display: flex;
`
const Styledli = styled.li`
  padding : 52px 25px;
  list-style-type: none;
  font-family: var(--thirth-font);
  color: var(--ligth-pink);
  &:hover{
    ${StyleBackgroundSelect}
  }
  ${prop=>(prop.data === prop.state ? StyleBackgroundSelect : "")}
  ${prop => prop.size? css`padding : 10px 25px;`:"" }
  `
function ListItem({list , size}) {
  const [select , setSelect] = useState("image")
  
  const items = list.map(iten =>{
    return(
      <Styledli 
        onClick ={()=>setSelect(iten)} data={iten} state={select} size={size}>
      {iten}
    </Styledli>
    )
  })
  return(
    
  <Styledul>{items}</Styledul>)
 
}

export {ListItem}
