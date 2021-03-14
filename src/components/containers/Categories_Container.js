import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 300px;
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