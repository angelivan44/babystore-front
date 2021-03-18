import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import DataContext from "../../DataContext";
import { Icon } from "../UI/Icon";
import { ListIcons } from "./List_Icons";

const StyledBurger = styled.label`
  position:fixed;
  z-index:10;
  rigth:10px;
  top:32px;
  
`
const StyledBurgerMain = styled.div`
display:none;
@media (max-width: 420px) {
  display: block;}
`
const StyledBurgerNormal = styled.label`

`
const StyledInput = styled.input`
  display:none;

`
const StyledList = styled.ul`
list-style-type:none;

`
const StyleDivModal = styled.div`
  position:fixed;
  display:flex;
  flex-direction:column;
  height:100vh;
  width: 100vw;
  background:#2D2F39;
  align-items:center;
  justify-content:center;
  top:0;
  left:0;
  z-index:5;
`
const StyleLi = styled.li`
  height:40px;
  color:var(--primary-color);
`

function Burger() {
  const {state , logoutService} = useContext(DataContext)
  const [mode , setMode] = useState(true);
  const history = useHistory();
   
  return (
    <StyledBurgerMain>
      <StyledInput type="checkbox" id="burger" 
        onChange={(e)=>{
        const inn = e.target.closest("input")
        setMode(inn.checked)
        
        }}></StyledInput>
        
      {mode ? (<StyledBurgerNormal for="burger">
        <Icon type="burger" size={40}></Icon>
      </StyledBurgerNormal>) :<>
      <StyledBurger for="burger">
        <Icon type="closed" size={40} fill="var(--primary-color)"></Icon>
      </StyledBurger>
      <StyleDivModal>
        <StyledList>
          <StyleLi onClick={()=>{
          if(state.user.id){
            history.push("/user")
            setMode(true)
          }
          else {
            history.push("/login")
            setMode(true)
          }
          }}>Login</StyleLi>
          <StyleLi onClick={()=>{
          if(state.user.id){
            history.push("/user")
            setMode(true)
          }
          else {
            history.push("/login")
            setMode(true)
          }
          }}>Mi Perfil</StyleLi>
          <StyleLi onClick={()=>{
            history.push("/questions")
            setMode(true)
            }}>Preguntas Frecuentes</StyleLi>
          <StyleLi onClick={()=>{
            logoutService()
            setMode(true)
            }}>Logout</StyleLi>
        </StyledList>
        <ListIcons type="social"></ListIcons>
      </StyleDivModal>
       </>}
    </StyledBurgerMain>
    
  )
}
export {Burger}