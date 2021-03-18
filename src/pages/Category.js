import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Card } from "../components/containers/Card";
import { ClothesContainer } from "../components/containers/Clothes_Container";
import { Footer } from "../components/containers/Footer";
import { GamesContainer } from "../components/containers/Games_Container";
import { Header } from "../components/containers/Header";
import { ListItem } from "../components/text/Item";
import { Content } from "../components/text/Text";
import { Icon } from "../components/UI/Icon";
import { Modal } from "../components/UI/Modal";
import DataContext from "../DataContext";



const StyledContainer = styled.div`
  padding:20px 0 10px 0;
  display:flex;
  width:100%;
  flex-direction:column;
  gap:16px;
  align-items: center;
 
`

function Category({history , location , match}) {
  const {state ,selectCategory ,setModalType,selectClothe } = useContext(DataContext);
  const data =["LO NUEVO", "OFERTAS"]
  const clothes = state.clothes
  const categories = state.categories
  const {category_id}= useParams()
  const datcategory = categories.find(cat => cat.id === parseInt(category_id))
  const category = datcategory || {name:"" , color : "" , service_url:""}
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const clothesRender = clothes
  .filter(item => item.category_id === parseInt(category_id))
  .map(clothe =>{
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
      main={true}
      ></Card>
    )
  })

  return (
    <>
      <Header></Header>
      <StyledContainer>
        <Content>{category.name}</Content>
        <ListItem size="small" list={data}></ListItem>
        <ClothesContainer>
          {clothesRender}
          {state.edit&&<Icon 
          type="plus" 
          size={45}
          onClick={(e)=>{
            e.preventDefault();
            selectCategory(category_id)
            selectClothe(0)
            console.log(state , "este state esta en el boton")
            setModalType("clothe")
          }}
          />}
        </ClothesContainer>
      </StyledContainer>
      <GamesContainer></GamesContainer>
      {state.modal&&<Modal type="clothe"/>}
      <Footer/>
    </>
  )
}
export {Category}