import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ShowClothe } from "../components/containers/Card_Show_Clothe";
import { Footer } from "../components/containers/Footer";
import { Header } from "../components/containers/Header";
import {  ContentBlue, ContentSub } from "../components/text/Text";
import { Button } from "../components/UI/Button";
import { Modal } from "../components/UI/Modal";
import DataContext from "../DataContext";

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
  const clothe = state.clothes.find(clothe => clothe.id === parseInt(id))
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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