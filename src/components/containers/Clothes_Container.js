import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: grid;
  align-self: center;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  width: 100%;
  grid-auto-rows: auto;
  gap:50px;
  padding: 30px 18px 10px 18px;

`
function ClothesContainer({children}) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
export {ClothesContainer}