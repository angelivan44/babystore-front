import { createFactory } from "react";
import { Card, CardCategory } from "../components/containers/Card";
import { CategoriesContainer } from "../components/containers/Categories_Container";
import { ClothesContainer } from "../components/containers/Clothes_Container";
import { Footer } from "../components/containers/Footer";
import { GamesContainer } from "../components/containers/Games_Container";
import { Header } from "../components/containers/Header";
import { ListItem } from "../components/text/Item";
import { Content } from "../components/text/Text";
import { Logo } from "../components/UI/Logo";
import { STORE } from "./storage";


function Main() {
  const data =["LO NUEVO", "OFERTAS"]
  const clothes = STORE.clothes
  const categories = STORE.categories

  const clothesRender = clothes.map(clothe =>{
    const oldPrice = clothe.price + 5
    const ofert = Math.ceil((1-clothe.price / oldPrice)*100)
    return (
      <Card url={clothe.service_url[0]} price ={clothe.price} oldPrice={oldPrice} ofert={ofert} name={clothe.name}></Card>
    )
  })

  const categoriesRender = categories.map(category=>{
    return (
      <CardCategory url={category.service_url} name={category.name} color={category.color}></CardCategory>
    )
  })

  return (
    <>
      <Header></Header>
      <Logo type="hero"></Logo>
      <Content>PRINCIPALES PRODUCTOS</Content>
      <ListItem size="small" list={data}></ListItem>
      <ClothesContainer>
        {clothesRender}
      </ClothesContainer>
      <CategoriesContainer>
        {categoriesRender}
      </CategoriesContainer>
      <GamesContainer></GamesContainer>
      <Footer/>
    </>
  )
}
export {Main}