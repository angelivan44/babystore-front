/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import DataContext from "../../DataContext";
import { Content, Heading1 } from "../text/Text";
import { Button } from "./Button";
import { Icon } from "./Icon";

const backAdd = css`
  background: var(--aqua);
`
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
  const {setModalType} = useContext(DataContext);

  return <StyleForm >
      <StyledHeader>
      <Icon type="closed" fill="white" onClick={()=>setModalType("")}></Icon>
      </StyledHeader>
        <Heading1>CATEGORIA</Heading1>
      <div>
        <label>Name</label>
        <input type="text" name="name"></input>
        <label>Color</label>
        <input type="text" name="color"></input>
        <label>Cover</label>
        <input type="file" name ="cover"></input>
      </div>
      <Button type={"Submit"}></Button>
      
    </StyleForm>;
}

function FormClothe() {
  const {createClothe , setModalType} = useContext(DataContext);
  
  return <StyleForm >
      <StyledHeader>
      <Icon type="closed" fill="white" onClick={()=>setModalType("")}></Icon>
      </StyledHeader>
        <Heading1>CLOTHE</Heading1>
      <div>
        <label>Name</label>
        <input type="text" name="name" ></input>
        <label>Price</label>
        <input type="text" name="price"></input>
        <label>Old Price</label>
        <input type="text" name="oldprice"></input>
        <label>size</label>
        <input type="text" name="size"></input>
        <label>Marca</label>
        <input type="text" name="brand"></input>
        <label>State</label>
        <input type="text" name="stock"></input>
        <label>Position</label>
        <input type="text" name="position"></input>
        <label>categoria</label>
        <input type="text" name="category_id"></input>
        <label>Imagenes</label>
        <input type="file" name ="images"></input>
      </div>
      <Button 
      type={"Submit"}
        onClick={(e)=>{ e.preventDefault();
        const form = e.target.closest("form");
        const {name , price , size , images} = form;
        createClothe({name:name.value, price: price.value , size:size.value , images: images.files})}}
      ></Button>
      
    </StyleForm>;
}

function FormSignUp({data}) {
  const {username , mail , role} = {...data}
  const {signup} = useContext(DataContext);
  
  return <StyleForm >
      <Heading1>CREAR USUARIO</Heading1>
      <div>
        <label>Email</label>
        <input type="text" name="mail" placeholder={mail||""}></input>
        <label>Username</label>
        <input type="text" name="username" placeholder={username||""}></input>
        <label>Password</label>
        <input type="password" name="password"></input>
      </div>
      <Button type={"Submit"}
        onClick={(e)=>{ e.preventDefault();
        const form = e.target.closest("form");
        console.log(form)
        const {mail , password , username} = form;
        signup({mail:mail.value, password: password.value , username:username.value})}}
      ></Button>
      
    </StyleForm>;
}

function FormLogin() {
const {login} = useContext(DataContext);
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
      onClick={(e)=>{ e.preventDefault();
        const form = e.target.closest("form");
        const {mail , password} = form;
        const result = login({mail:mail.value, password: password.value})
      ;
        result ? history.push("/user"): setAlert(true) ;
      }}
      >
      </Button>
      {alert&&<Content>Password or Email Incorrect</Content>}
      
    </StyleForm>;
}

function FormUser({data}) {
  const {username , mail , role} = {...data}
  const [editUser , setEditUser] = useState(false)
  
  return <StyleForm >
      <Heading1>USUARIO</Heading1>
      <StyleContainer>
        <label>Email:</label>
        {editUser? 
        <input type="text" name="mail" value={mail||""}></input> :
         <StyleLabel>mail</StyleLabel>}

        <label>Username:</label>
         {editUser? 
        <input type="text" name="username" value={mail||""}></input> :
         <StyleLabel>username</StyleLabel>}

        {!editUser&&<label>Role:</label>}
        {!editUser&&<StyleLabel>Role</StyleLabel>}

        {editUser&&(<label>Password</label> )}
        {editUser&&<input type="text" name="password" ></input>}
  
      </StyleContainer>
      {!editUser&&<Button type="edit" onClick={()=>setEditUser(!editUser)}></Button>}
      {editUser&&<Button type ="Guardar" onClick = {()=>{
        setEditUser(!editUser);
        console.log("esta funcion actualiza el state")
      }} />}
      
    </StyleForm>;
}

export  {FormCategory , FormClothe, FormSignUp , FormLogin , FormUser};