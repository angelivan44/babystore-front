import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "../UI/Icon";

const dataiter = {
  header :["seach","user","cart","burger"],
  social : ["instagram", "facebook"]
}

const StyleBackgroundSelect = css`
  font-family: var(--thirth-font);
  color: #FFFFFF; 
  background: #2D2F39;

`
const Styledul = styled.ul`
  display: flex;
  gap:10px;
`
const Styledli = styled.li`
  
`
const SocialColors = {
  instagram : "#F5832A",
  facebook : "#3B5998"
}

function ListIcons({type}) {
  
  const items = dataiter[type].map(item =>{
    return(
      <Styledli>
        <Icon type={item} size={43} fill={SocialColors[item] || "black" }></Icon>
      </Styledli>
    )
  })
  return(
    
  <Styledul>{items}</Styledul>)
 
}

export {ListIcons}
