import styled from "@emotion/styled";
import { Button } from "../UI/Button";
import gm from "./../../assets/games.png"

const StyledContainer = styled.div`
  display:flex;
  position: relative;
  width: 100%;
  height: 367px;
  padding-top:200px;
  justify-content:center;
  align-items:center;
  background-image:url(${gm});
  background-size: cover;
  background-position: center;
`
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`
const StyledButton = styled.div`
  display: flex;
  
`
function GamesContainer() {
  return (
    <StyledContainer>
      <StyledButton>
        <Button type="Play Now"></Button>
      </StyledButton>
    </StyledContainer>
  )
}
export {GamesContainer}