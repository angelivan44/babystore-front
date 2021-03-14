import styled from "@emotion/styled";
import { Icon } from "../UI/Icon";

const StyleImg = styled.img`
width: 100%;
height: 100%;
`
const StyleDiv =  styled.div`
  position:relative;
  width: 350px;
  height: 600px;
  `
const StyleEdit =  styled.div`
  position:absolute;
  bottom:10px;
  right:30px;
  display:flex;
  flex-direction: rigth;
  justify-content: flex-end;
  gap:20px;
  `
function ShowClothe({src , edit}) {
  return (
    <StyleDiv>
      <StyleImg src={src}></StyleImg>
      {edit&&<StyleEdit>
            <Icon type="edit" size={15}></Icon>
            <Icon type="trash" size={15}></Icon>
        </StyleEdit>}
    </StyleDiv>
    
  )
}

export {ShowClothe}