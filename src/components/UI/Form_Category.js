/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import DataContext from "../../DataContext";
import { Content, Heading1 } from "../text/Text";
import { Button } from "./Button";
import { Icon } from "./Icon";


const StyledHeader = styled.div`
  display:flex;
  width:100%;
  justify-content: flex-end;
`

const StyleLabel = styled.label`
  box-sizing: border-box;
  border-radius: 8px;
  background: #FFFFFF;
  width: 100%;
  height: 30px;
  color:var(--black);
`
const StyleContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100%; 
`

const StyleForm = styled.form`
  display:flex;
  flex-direction:column;
  align-items: center;
  gap:5px;
  width: 264px;
  height: auto;
  padding-bottom:10px;
  font-family=var(--fourth-font);
  font-size: 14px;
  line-height: 24px;
  label{
    color: var(--purple);
  }
  input {

    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid #5B7083;
    background: #FFFFFF;
    width: 100%;
    height: 30px;
    ::-webkit-file-upload-button {
      background: var(--purple);
      color: white;
      border-radius: 10px;
      height: 100%;
      padding: px 16px;
    }
  }


`



function FormCategory() {
  
  const {setModalType , updateCategory,state, createCategory} = useContext(DataContext);
  console.log( state.categories, "lo que quiero ver")
  const category = state.current_category !== 0 ? state.categories.find(cat => cat.id === state.current_category):{}
  const [valuesForm , setValuesForm] = useState({name:category.name , color:category.color, position:category.position});
  return <StyleForm >
      <StyledHeader>
      <Icon type="closed" fill="white" onClick={()=>setModalType("")}></Icon>
      </StyledHeader>
        <Heading1>CATEGORIA</Heading1>
      <div>
        <label>Name</label>
        <input type="text" 
        name="name" 
        value={valuesForm.name|| ""} 
        onChange={(e)=>{
          setValuesForm({...valuesForm,name:e.target.value})
          }}></input>
        <label>Color</label>
        <input type="text" 
        name="color" 
        value ={valuesForm.color || ""}
        onChange={(e)=>{
          setValuesForm({...valuesForm,color:e.target.value})
          }}
        ></input>
        <label>Position</label>
        <input type="text" 
        name="position" 
        value ={valuesForm.position || ""}
        onChange={(e)=>{
          setValuesForm({...valuesForm,position:e.target.value})
          }}
        ></input>
        <label>Cover</label>
        <input type="file" name ="cover"></input>
      </div>
      <Button type={"Submit"} 
      onClick={(e)=>{
        e.preventDefault();

        const form = e.target.closest("form");
          const formData = new FormData();
          formData.append('category[name]', form.name.value);
          formData.append('category[color]', form.color.value);
          formData.append('category[position]', form.position.value);
        if(state.current_category === 0){
            formData.append('category[cover]', form.cover.files[0], form.cover.value);
            createCategory(formData);
            setModalType("")
        }
        else {
          if(form.cover.value){
            formData.append('category[cover]', form.cover.files[0], form.cover.value);
            updateCategory(formData,state.current_category)
          }
          else {
            updateCategory(formData , state.current_category)
          }
        }
        
      }}></Button>
      
    </StyleForm>;
}

function FormClothe() {
  const {createClothe , setModalType , state, updateClothe}  = useContext(DataContext);
  const clotheSelect = state.clothes.find(clothe => clothe.id===state.current_clothe)
  console.log(state.current_category , "actual clothe asasas")
  const [dataClothe , setDataClothe] = useState({
    name:clotheSelect ? clotheSelect.name : "",
    price:clotheSelect ? clotheSelect.price :"",
    oldprice:clotheSelect ? clotheSelect.oldprice :"",
    brand:clotheSelect ? clotheSelect.brand :"",
    status:clotheSelect ? clotheSelect.status :"",
    position:clotheSelect ? clotheSelect.position :"",
  })
  return <StyleForm >
      <StyledHeader>
      <Icon type="closed" fill="white" onClick={()=>setModalType("")}></Icon>
      </StyledHeader>
        <Heading1>CLOTHE</Heading1>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={dataClothe.name || ""}
        onChange ={(e)=>{setDataClothe({...dataClothe,name:e.target.value})}}
        ></input>
        <label>Price</label>
        <input type="text" name="price" value ={dataClothe.price || ""}
        onChange ={(e)=>{setDataClothe({...dataClothe,price:e.target.value})}}
        ></input>
        <label>Old Price</label>
        <input type="text" name="oldprice" value = {dataClothe.oldprice || ""}
        onChange ={(e)=>{setDataClothe({...dataClothe,oldprice:e.target.value})}}
        ></input>
        <label>size</label>
        <input type="text" name="size" value = {dataClothe.size || ""}
        onChange ={(e)=>{setDataClothe({...dataClothe,size:e.target.value})}}
        ></input>
        <label>Marca</label>
        <input type="text" name="brand" value = {dataClothe.brand || ""}
        onChange ={(e)=>{setDataClothe({...dataClothe,brand:e.target.value})}}
        ></input>
        <label>State</label>
        <input type="text" name="status" value = {dataClothe.status || ""}
        onChange ={(e)=>{setDataClothe({...dataClothe,status:e.target.value})}}
        ></input>
        <label>Position</label>
        <input type="text" name="position" value={dataClothe.position || "" }
        onChange ={(e)=>{setDataClothe({...dataClothe,position:e.target.value})}}
        ></input>
        <label>Imagenes</label>
        <input type="file" name ="images"></input>
      </div>
      <Button type={"Submit"}
        onClick={(e)=>{ 
        e.preventDefault();
        console.log(state , "ACTUAL CLOTHE");
        const form = e.target.closest("form");
        const formData = new FormData();
        formData.append('clothe[name]', form.name.value);
        formData.append('clothe[price]', form.price.value);
        formData.append('clothe[oldprice]', form.oldprice.value);
        formData.append('clothe[size]', form.size.value);
        formData.append('clothe[status]', form.status.value);
        formData.append('clothe[position]', form.position.value);
        formData.append('clothe[category_id]', state.current_category);

          if(state.current_clothe === 0){
            const countImages = form.images.files.length
            console.log(countImages ,"cantidad de imagenes")
            for(let i=0 ; i<countImages ; i++){
              formData.append('clothe[images]', form.images.files[i], form.images.value);
            }
            createClothe(formData,state.current_category);
            setModalType("")
          }
          else {
            if(form.images.value){
              const countImages = form.images.files.length
              console.log(countImages ,"cantidad de imagenes")
              for(let i=0 ; i<countImages ; i++){
                formData.append('clothe[images]', form.images.files[i], form.images.value);
              };
              updateClothe(formData,state.current_category ,state.current_clothe);
            }
            else {
              updateClothe(formData,state.current_category ,state.current_clothe);
            }
          }
      }}
      ></Button>
      
    </StyleForm>;
}

function FormSignUp({data}) {
  const {signup} = useContext(DataContext);
  const history = useHistory();
  
  return <StyleForm >
      <Heading1>CREAR USUARIO</Heading1>
      <div>
        <label>Email</label>
        <input type="text" name="mail" placeholder={""}></input>
        <label>Username</label>
        <input type="text" name="username" placeholder={""}></input>
        <label>Password</label>
        <input type="password" name="password"></input>
      </div>
      <Button type={"Submit"}
        onClick={(e)=>{ e.preventDefault();
        const form = e.target.closest("form");
        console.log(form)
        const {mail , password , username} = form;
        signup({mail:mail.value, password: password.value , username:username.value})
        history.push("/user")
      }}
      ></Button>
      
    </StyleForm>;
}

function FormLogin() {
const {loginService} = useContext(DataContext);
const [alert , setAlert] = useState(false)
const history = useHistory();

return <StyleForm >
      <Heading1>LOGIN</Heading1>
      <div>
        <label>Email</label>
        <input type="text" name="mail"></input>
        <label>Password</label>
        <input type="password" name="password"></input>
      </div>
      <Button 
      type={"Submit"} 
      onClick={async (e)=>{ e.preventDefault();
        const form = e.target.closest("form");
        const {mail , password} = form;
        const result = await loginService({mail:mail.value, password: password.value})
      ;
        result ? history.push("/user"): setAlert(true) ;
      }}
      >
      </Button>
      {alert&&<Content>Password or Email Incorrect</Content>}
      <Link to="/signup"> 
      <Content>Crear Ususario</Content>
      </Link>
      
      
    </StyleForm>;
}

function FormUser() {
  const {state} = useContext(DataContext)
  const [editUser , setEditUser] = useState(false)
  
  return <StyleForm >
      <Heading1>USUARIO</Heading1>
      <StyleContainer>
        <label>Email:</label>
        {editUser? 
        <input type="text" name="mail" value={state.user.mail||""}></input> :
         <StyleLabel>{state.user.mail}</StyleLabel>}

        <label>Username:</label>
         {editUser? 
        <input type="text" name="username" value={state.user.username||""}></input> :
         <StyleLabel>{state.user.username}</StyleLabel>}

        {!editUser&&<label>Role:</label>}
        {!editUser&&<StyleLabel>{state.user.role}</StyleLabel>}

        {editUser&&(<label>Password</label> )}
        {editUser&&<input type="password" name="password" ></input>}
  
      </StyleContainer>
      {!editUser&&<Button type="edit" onClick={()=>setEditUser(!editUser)}></Button>}
      {editUser&&<Button type ="Guardar" onClick = {()=>{
        setEditUser(!editUser);
        console.log("esta funcion actualiza el state")
      }} />}
      {editUser&&<Button type ="Cancelar" onClick = {()=>{
        setEditUser(!editUser);
      }} />}
    </StyleForm>;
}

export  {FormCategory , FormClothe, FormSignUp , FormLogin , FormUser};