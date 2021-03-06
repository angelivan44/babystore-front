/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import DataContext from "../../DataContext";
import { ContentBlue, ContentSub } from "../text/Text";
import { Button } from "../UI/Button";
import { Icon } from "../UI/Icon";

const pinkBackGround =css`
  background: linear-gradient(110.38deg, #DDB1BF -8.41%, rgba(255, 255, 255, 0) 102.17%)
`
const blueBackGround =css`
  background: linear-gradient(126.38deg, #5FDED6 9.7%, rgba(255, 255, 255, 0) 83.42%)
`
const greenBackGround =css`
  background: linear-gradient(133.11deg, #6ED198 14.43%, rgba(255, 255, 255, 0) 87.31%)
`
const yelowBackGround =css`
  background: linear-gradient(139.71deg, #F2C44C 15.6%, rgba(255, 255, 255, 0) 82.59%)
`
const redBackGround =css`
  background: linear-gradient(110.38deg, #EE6A4D -8.41%, rgba(255, 255, 255, 0) 102.17%)
`
const purpleBackGround =css`
  background: linear-gradient(110.38deg, #4D54EE -8.41%, rgba(255, 255, 255, 0) 102.17%)
`
const orangeBackGround =css`
  background: linear-gradient(110.38deg, #EEB74D -8.41%, rgba(255, 255, 255, 0) 102.17%)
`
const setBackGrounds = {
  "pink" : pinkBackGround,
  "blue" : blueBackGround,
  "green" : greenBackGround,
  "yellow" : yelowBackGround,
  "red" : redBackGround,
  "purple" : purpleBackGround,
  "orange" : orangeBackGround
}
const StyleDiv = styled.div`
  display:flex;
  width: 326px;
    height: 499px;
  border-radius: 20px;
  flex-direction:column;
  gap:5px;
  justify-content:center;
  align-self: center;
  justify-self: center;
  align-items: center;
  border: 1px solid #000000;
  background: #FFFFFF;
  padding:11px 21px 11px 21px;
  ${prop => prop.category ? css` width: 197px;
  height: 275px;` :css` `}
  ${prop => setBackGrounds[prop.color]}
  ${prop => prop.color? css `border: 1px solid ${prop.color};`:"" }
`
const StyleImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius:5px;
`
const StyleImgCategory = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #000000;
    ${prop => setBackGrounds[prop.color]}
    ${prop => prop.color? css `border: 1px solid ${prop.color};`:"" }
`



const StyleHover = styled.div`
  position:absolute;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  opacity: 0;
  top : 0;
  rigth:0;
  padding: 20px;

`
const StyleImgConainer = styled.div`
  position:relative;
  width: 285px;
  height: 412px;
  transition : opacity 3000ms;
  &:hover {
    div {
      opacity:1;
    }
  }
  
`
const SyleCover = styled.div`
  width: 175px;
  height: 175px;
`
const StyleOfert =  styled.div`
  display:flex;
  justify-content: space-between;
  `
  const StyleEdit =  styled.div`
  display:flex;
  justify-content: space-between;
  width:25%
  `
  const StylePrices =  styled.div`
  display:flex;
  justify-content: space-between;
  width:140px;
  align-items:center;
  gap;5px;
  `
const StyleOfertDiv =  styled.div`
  width: 57px;
  height: 38px;
  font-family:var(--primary-font);
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content:center;
  border-radius: 10px;
  background: #FFE600;
  border: 1px solid #000000;
  `
function Card({
  url,
  price, 
  oldPrice, 
  ofert, 
  name, 
  id, 
  category,
  main
  }) {
    const {
      setModalType, 
      state, 
      selectClothe, 
      selectCategory,
      deleteClothe,
      favoriteUser} = useContext(DataContext)
    const {category_id} = useParams();
    const history = useHistory();
  return (
    <StyleDiv>
      <StyleImgConainer>
        <StyleHover onClick={(e)=>{
          if(e.target === e.currentTarget){
            history.push(`/category/${category}/clothe/${id}`)
          }
          }}>
          <StyleOfert>
            {main&&<StyleOfertDiv>{ofert}%</StyleOfertDiv>}
            <Icon type="heart" size={30}
            onClick = {()=>{favoriteUser(id)}}
            ></Icon>
          </StyleOfert>
          {main&&<Button type="add"></Button>}
        </StyleHover>
        
        <StyleImg src={url}/>
      </StyleImgConainer>
      <ContentSub>{name}</ContentSub>
      <StylePrices>
        <ContentBlue>S/. {price}</ContentBlue>
        <ContentSub sub={true}>S/. {oldPrice}</ContentSub>
      </StylePrices>
      {state.edit&&<StyleEdit>
            <Icon 
              type="edit" 
              size={15} 
              onClick={()=>{
                selectClothe(id)
                selectCategory(category_id)
                setModalType("clothe")
                console.log(id ,state.current_clothe, "id de clothe enviado con el formulario")
                }}></Icon>
            <Icon 
            type="trash" 
            size={15}
            onClick={()=>{deleteClothe(category_id,id)}}
            ></Icon>
        </StyleEdit>}
    </StyleDiv>
  )
}

function CardCategory({
  url,
  name, 
  color, 
  history, 
  id ,
  category,
  edit,
  }) {

  const {setModalType , selectCategory, deleteCategory} = useContext(DataContext)
  return (
    <StyleDiv category={true} color={color}>
      <SyleCover>
        <StyleImgCategory src={url} color={color}/>
      </SyleCover>
      <ContentSub>{name}</ContentSub>
          <Link to={`/category/${id}`}>
            <Button type="VER" history={history}></Button>
          </Link>
        {edit&&<StyleEdit>
            <Icon 
              type="edit" 
              size={15} 
              onClick={()=>{
                setModalType("category")
                selectCategory(id)
                }}></Icon>
            <Icon 
            type="trash" 
            size={15}
            onClick={()=>{deleteCategory(id)}}
            ></Icon>
        </StyleEdit>}
        
    </StyleDiv>
  )
}

export {Card,CardCategory};