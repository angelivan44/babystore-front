import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: grid;
  align-self: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  width: 100%;
  gap:10%;
  padding: 30px 15% 56px 15%;

`
function CategoriesContainer({children}) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
export {CategoriesContainer}