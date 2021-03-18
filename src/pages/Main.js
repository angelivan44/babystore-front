import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Burger } from "../components/containers/Burger";
import { Card, CardCategory } from "../components/containers/Card";
import { CategoriesContainer } from "../components/containers/Categories_Container";
import { ClothesContainer } from "../components/containers/Clothes_Container";
import { Footer } from "../components/containers/Footer";
import { GamesContainer } from "../components/containers/Games_Container";
import { Header } from "../components/containers/Header";
import { ListItem } from "../components/text/Item";
import { Content } from "../components/text/Text";
import { Icon } from "../components/UI/Icon";
import { Logo } from "../components/UI/Logo";
import { Modal } from "../components/UI/Modal";
import DataContext from "../DataContext";


const StyledContainer = styled.div`
  padding:20px 0 10px 0;
  display:flex;
  width:100%;
  heigth :auto;
  flex-direction:column;
  gap:16px;
  align-items: center;
 
`

function Main({history}) {
  const {state , selectCategory,setModalType } = useContext(DataContext);
  const clothes = state.clothes
  console.log(state , "aaaaaaaa")
  const categories = state.categories;

  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const clothesNews = clothes
  .filter(clothe => clothe.status === "new")
  .sort((a,b)=>a.position-b.position)
  .map(clothe =>{
    const oldPrice = clothe.oldprice
    const ofert = Math.ceil((1-clothe.price / oldPrice)*100)
    return (
      <Card 
      url={clothe.service_url[0]} 
      price ={clothe.price} 
      oldPrice={clothe.oldprice} 
      ofert={ofert} 
      name={clothe.name}
      id={clothe.id}
      category={clothe.category_id}
      edit={state.edit}
      main={true}
      ></Card>
    )
  })
  
  const clothesOfert = clothes
  .filter(clothe => clothe.status === "ofert")
  .sort((a,b)=>a.position-b.position)
  .map(clothe =>{
    const oldPrice = clothe.oldprice
    const ofert = Math.ceil((1-clothe.price / oldPrice)*100)
    return (
      <Card 
      url={clothe.service_url[0]} 
      price ={clothe.price} 
      oldPrice={clothe.oldprice} 
      ofert={ofert} 
      name={clothe.name}
      id={clothe.id}
      category={clothe.category_id}
      edit={state.edit}
      main={true}
      ></Card>
    )
  })

  const setClothes = {
    new : clothesNews,
    ofert : clothesOfert
  }
  const categoriesRender = categories
  .sort((a,b)=>a.position-b.position)
  .map(category=>{
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
        <ListItem size="small" type={"option"}></ListItem>
        <ClothesContainer>
          {setClothes[state.option]}
        </ClothesContainer>
      </StyledContainer>
      <StyledContainer>
        <Content>CATEGORIAS</Content>
        <CategoriesContainer>
        {categoriesRender}
        {state.edit&&
        <Icon 
        type="plus" 
        size={50}
        onClick={()=>{
          selectCategory(0);
          setModalType("category");
        }}
        />}
        </CategoriesContainer>
      </StyledContainer>
      <GamesContainer></GamesContainer>
      {state.modal && <Modal type={state.modal}/> }
      <Footer/>
    </>
  )
}
export {Main}