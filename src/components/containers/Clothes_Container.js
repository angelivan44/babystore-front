import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: grid;
  align-self: center;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
  width: 100%;
  gap:27px;
  padding: 109px 18px 52px 18px;

`
function ClothesContainer({children}) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
export {ClothesContainer}