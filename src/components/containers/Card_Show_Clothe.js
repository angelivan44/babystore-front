import styled from "@emotion/styled";

const StyleImg = styled.img`
  width: 350px;
  height: 600px;
`
function ShowClothe({src}) {
  return (
    <StyleImg src={src}></StyleImg>
  )
}

export {ShowClothe}