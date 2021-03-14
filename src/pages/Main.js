import styled from "@emotion/styled";
import { createFactory, useContext, useState } from "react";
import { Card, CardCategory } from "../components/containers/Card";
import { CategoriesContainer } from "../components/containers/Categories_Container";
import { ClothesContainer } from "../components/containers/Clothes_Container";
import { Footer } from "../components/containers/Footer";
import { GamesContainer } from "../components/containers/Games_Container";
import { Header } from "../components/containers/Header";
import { ListItem } from "../components/text/Item";
import { Content } from "../components/text/Text";
import { Logo } from "../components/UI/Logo";
import { Modal } from "../components/UI/Modal";
import DataContext from "../DataContext";
import { STORE } from "./storage";

const StyledContainer = styled.div`
  padding:20px 0 10px 0;
  display:flex;
  width:100%;
  flex-direction:column;
  gap:16px;
  align-items: center;
 
`

function Main({history}) {
  const data =["LO NUEVO", "OFERTAS"]
  const clothes = STORE.clothes
  const categories = STORE.categories;
  const {state} = useContext(DataContext);
  const clothesRender = clothes.map(clothe =>{
    const oldPrice = clothe.price + 5
    const ofert = Math.ceil((1-clothe.price / oldPrice)*100)
    return (
      <Card 
      url={clothe.service_url[0]} 
      price ={clothe.price} 
      oldPrice={oldPrice} 
      ofert={ofert} 
      name={clothe.name}
      id={clothe.id}
      category={clothe.category_id}
      edit={state.edit}
      ></Card>
    )
  })

  const categoriesRender = categories.map(category=>{
    return (
      <CardCategory 
      url={category.service_url} 
      name={category.name} 
      color={category.color}
      history={history}
      id={category.id}
      edit={state.edit}
      >
      </CardCategory>
    )
  })

  return (
    <>
      <Header></Header>
      <Logo type="hero"></Logo>
      <StyledContainer>
        <Content>PRINCIPALES PRODUCTOS</Content>
        <ListItem size="small" list={data}></ListItem>
        <ClothesContainer>
          {clothesRender}
        </ClothesContainer>
      </StyledContainer>
      <StyledContainer>
        <Content>CATEGORIAS</Content>
        <CategoriesContainer>
        {categoriesRender}
        </CategoriesContainer>
      </StyledContainer>
      <GamesContainer></GamesContainer>
      {state.modal && <Modal type={state.modal}/> }
      <Footer/>
    </>
  )
}
export {Main}