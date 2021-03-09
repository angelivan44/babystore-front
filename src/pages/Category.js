import styled from "@emotion/styled";
import { Card, CardCategory } from "../components/containers/Card";
import { ClothesContainer } from "../components/containers/Clothes_Container";
import { Footer } from "../components/containers/Footer";
import { GamesContainer } from "../components/containers/Games_Container";
import { Header } from "../components/containers/Header";
import { ListItem } from "../components/text/Item";
import { Content } from "../components/text/Text";
import { Logo } from "../components/UI/Logo";
import { STORE } from "./storage";

const StyledContainer = styled.div`
  padding:20px 0 10px 0;
  display:flex;
  width:100%;
  flex-direction:column;
  gap:16px;
  align-items: center;
 
`

function Category() {
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

  return (
    <>
      <Header></Header>
      <StyledContainer>
        <Content>BOY</Content>
        <ListItem size="small" list={data}></ListItem>
        <ClothesContainer>
          {clothesRender}
        </ClothesContainer>
      </StyledContainer>
      <GamesContainer></GamesContainer>
      <Footer/>
    </>
  )
}
export {Category}