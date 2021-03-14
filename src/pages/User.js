import styled from "@emotion/styled";
import { useContext } from "react";
import { Card } from "../components/containers/Card";
import { ClothesContainer } from "../components/containers/Clothes_Container";
import { Footer } from "../components/containers/Footer";
import { Header } from "../components/containers/Header";
import { Content, Heading1 } from "../components/text/Text";
import { Button } from "../components/UI/Button";
import { FormLogin, FormSignUp, FormUser } from "../components/UI/Form_Category";
import DataContext from "../DataContext";

const StyledContainer = styled.div`
  padding:20px 0 10px 0;
  display:flex;
  width:100%;
  flex-direction:column;
  gap:16px;
  align-items: center;
 
`

function User({history , location , match , user }) {
  const {state , modeEditor} = useContext(DataContext);
  const evalRol = (data) =>{
    return data.user.role? data.user.role === "admin" : false;
  }
  const favorites = state.user.favorites.map(clothe =>{
    return (
      <Card
        url={clothe.service_url[0]} 
        price ={clothe.price} 
        oldPrice={clothe.oldPrice} 
        name={clothe.name}
        id={clothe.id}
        category={clothe.category_id}
        edit={state.edit}
      />
    )
  })

  const buys = state.user.buy.map(clothe=>{
    return (
      <Card
        url={clothe.service_url[0]} 
        price ={clothe.price} 
        oldPrice={clothe.oldPrice} 
        name={clothe.name}
        id={clothe.id}
        category={clothe.category_id}
        edit={state.edit}
      />
    )
  }

  )
  return (
    <>
      <Header></Header>
      <StyledContainer>
        <Content>Profile</Content>
        <FormUser data = {user}></FormUser>
        {evalRol(state)&&<Button type="Modo Editor" onClick={()=>{modeEditor(true)}}/>}
        {evalRol(state)&&<Button type="Modo Normal" onClick={()=>{modeEditor(false)}}/>}
      </StyledContainer>
      <Heading1>Favoritos</Heading1>
      <ClothesContainer>
        {favorites||<Content>No tienes favoritos</Content>}
      </ClothesContainer>
      <Heading1>Comprados</Heading1>
      <ClothesContainer>
        {buys||<Content>No tienes articulos comprados</Content>}
      </ClothesContainer>
      <Footer/>
    </>
  )
}

export {User}