import styled from "@emotion/styled";
import { useContext } from "react";
import { Footer } from "../components/containers/Footer";
import { Header } from "../components/containers/Header";
import { FormLogin, FormSignUp } from "../components/UI/Form_Category";

const StyledContainer = styled.div`
  padding:20px 0 10px 0;
  display:flex;
  width:100%;
  flex-direction:column;
  gap:16px;
  align-items: center;
 
`

function SignUp({history , location , match}) {

  return (
    <>
      <Header></Header>
      <StyledContainer>
        <FormSignUp></FormSignUp>
      </StyledContainer>
      <Footer/>
    </>
  )
}

function Login({history , location , match}) {
  return (
    <>
      <Header></Header>
      <StyledContainer>
        <FormLogin></FormLogin>
      </StyledContainer>
      <Footer/>
    </>
  )
}
export {Login , SignUp}