import styled from "@emotion/styled";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, CardCategory } from "../components/containers/Card";
import { ShowClothe } from "../components/containers/Card_Show_Clothe";
import { ClothesContainer } from "../components/containers/Clothes_Container";
import { Footer } from "../components/containers/Footer";
import { GamesContainer } from "../components/containers/Games_Container";
import { Header } from "../components/containers/Header";
import { ListItem } from "../components/text/Item";
import { Content, ContentBlue, ContentSub } from "../components/text/Text";
import { Button } from "../components/UI/Button";
import { Logo } from "../components/UI/Logo";
import { Modal } from "../components/UI/Modal";
import DataContext from "../DataContext";
import { STORE } from "./storage";

const StyledContainer = styled.div`
  padding:20px 0 10px 0;
  display:flex;
  flex-direction:column;
  width:50%;
  gap:16px;
  align-items: center;
  justify-content:center;
 
`
const StyledData = styled.div`
  padding:20px 0 10px 10px;
  display:flex;
  flex-direction:column;
  width:50%;
  gap:16px;
 
`

const StyledMain = styled.div`
  padding:20px 0 10px 0;
  display:flex;
  width:100%;
  gap:16px;
 
`

function Clothe() {
  const {state , setModalType} = useContext(DataContext);
  const data =["LO NUEVO", "OFERTAS"]
  const {id} = useParams();
  const clothe = STORE.clothes.find(clothe => clothe.id === parseInt(id))
  const clothesRender = clothe.service_url.map(item =>{
    return (
      <ShowClothe src={item}></ShowClothe>
    )
  })

  return (
    <>
      <Header></Header>
      <StyledMain>
        <StyledContainer>
          {clothesRender}
        </StyledContainer>
        <StyledData>
          <ContentSub>Nombre:</ContentSub>
          <ContentBlue>{clothe.name}</ContentBlue>
          <ContentSub>Precio:</ContentSub>
          <ContentBlue>S/. {clothe.price}</ContentBlue>
          <ContentSub>Talla:</ContentSub>
          <ContentBlue>{clothe.size}</ContentBlue>
          <ContentSub>Marca:</ContentSub>
          <ContentBlue>{clothe.brand}</ContentBlue>
          <StyledContainer>
            <Button type="add"></Button>
            <Button type="buy"></Button>
            {state.edit&&<Button type="edit" onClick={()=>setModalType("clothe")}/>}
          </StyledContainer>
        </StyledData>
        {state.modal&&<Modal type="clothe"/>}
      </StyledMain>
      
      <Footer/>
    </>
  )
}
export {Clothe}