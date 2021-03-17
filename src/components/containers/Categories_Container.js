import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: grid;
  align-items:center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  width: 100%;
  gap:15px;
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