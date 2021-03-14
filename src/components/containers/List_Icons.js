import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { Icon } from "../UI/Icon";


const Styledul = styled.ul`
  display: flex;
  gap:10px;
`


function ListIcons({type}) {
  const history = useHistory();

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
        <Icon type="user" size={43} onClick={()=>history.push("/user")}></Icon>
      </li>
      <li>
        <Icon type="cart" size={43} onClick={()=>history.push("/cart")}></Icon>
      </li>
      <li>
        <Icon type="burger" size={43} onClick={()=>history.push("/about")}></Icon>
      </li>
      </>
      
      )
  
  const setIcon = {
    header: headinIcons,
    social: socialMedia,
  }
  
  return(
    
  <Styledul>{setIcon[type]}</Styledul>
  
  )
 
}

export {ListIcons}
