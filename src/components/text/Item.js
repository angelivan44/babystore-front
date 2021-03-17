
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import DataContext from "../../DataContext";

const StyleBackgroundSelect = css`
  font-family: var(--thirth-font);
  color: #FFFFFF; 
  background: #2D2F39;

`
const Styledul = styled.ul`
  display: flex;
  @media (max-width: 420px) {
    display: none;}
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
function ListItem({list , size ,type}) {
  const {optionView} = useContext(DataContext);
  const [select , setSelect] = useState("image")
  const history = useHistory();

  const heading = (
    <>
      <Styledli 
      onClick ={()=>{
        setSelect("INICIO")
        history.push("/")
      }} 
      data={"INICIO"} 
      state={select} 
      size={size}>INICIO
      </Styledli>
      <Styledli onClick ={()=>{
        setSelect("COLECCIONES")
        history.push("/collections")
        }} data={"COLECCIONES"} state={select} size={size}>COLECCIONES
      </Styledli>
      <Styledli onClick ={()=>{
        setSelect("PREGUNTAS FRECUENTES")
        history.push("/questions")
        }} data={"PREGUNTAS FRECUENTES"} state={select} size={size}>PREGUNTAS FRECUENTES
      </Styledli>
    </>
  )

  const options = (

    <>
    <Styledli onClick ={()=>{
      setSelect("LO NUEVO")
      optionView("new")
      }}
       data={"LO NUEVO"} state={select} size={size}>LO NUEVO
    </Styledli>
    <Styledli onClick ={()=>{
      setSelect("OFERTAS")
      optionView("ofert")
      }} data={"OFERTAS"} state={select} size={size}>OFERTAS
    </Styledli>
  </>
  )
  
  const setItems = {
    header : heading,
    option : options
  }
  return(
    
  <Styledul>{setItems[type]}</Styledul>)
 
}

export {ListItem}
