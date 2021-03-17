import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import DataContext from "../../DataContext";
import { logout } from "../../services/session_service";
import { Icon } from "../UI/Icon";


const Styledul = styled.ul`
  display: flex;
  gap:10px;
  @media (max-width: 420px) {
    display: none;}
`
const StyledulSocial = styled.ul`
  display: flex;
  gap:10px;
`


function ListIcons({type}) {
  const history = useHistory();
  const {state,logoutService} = useContext(DataContext);
  const socialMedia = (
        <>
        <li>
          <a href="https://www.instagram.com/babyguadalupeboutique/" target= "_blank">
            <Icon type="instagram" size={43} fill="#F5832A"></Icon>
            </a>
        </li>
          <li>
          <a href="https://www.facebook.com/Baby-Guadalupe-Boutique-104895731327243" target="_blank">
            <Icon type="facebook" size={43} fill="#3B5998"></Icon>
            </a>
        </li>
        </>
          
        )

  const headinIcons = (
      <>
      <li>
        <Icon type="seach" size={43} onClick={()=>history.push("/search")}></Icon>
      </li>
      <li>
        <Icon type="user" size={43} onClick={()=>{
          if(state.user.id){
            history.push("/user")
          }
          else {
            history.push("/login")
          }
          }}
            
            ></Icon>   
          
         
      </li>
      <li>
        <Icon type="cart" size={43} onClick={()=>history.push("/cart")}></Icon>
      </li>
      <li>
        <Icon type="burger" size={43} onClick={()=>history.push("/about")}></Icon>
      </li>
      {state.user.id&&<li>
        <Icon 
          type="logout" 
          size={43} 
          fill="red"
          onClick={()=>{
            console.log("outttt")
            logoutService()}}
          ></Icon>
        </li>}
      </>
      
      )
  
  const setIcon = {
    header: <Styledul>{headinIcons}</Styledul>,
    social: <StyledulSocial>{socialMedia}</StyledulSocial>,
  }
  
  return(
    
  setIcon[type]
  
  )
 
}

export {ListIcons}
