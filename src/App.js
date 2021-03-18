import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useReducer , useEffect } from "react"
import { Main } from './pages/Main'
import { Category } from "./pages/Category";
import { Clothe } from "./pages/Clothe";
import { Library } from "./pages/Library";
import { Login, SignUp } from "./pages/SignUp";
import DataContext from "./DataContext";
import {User} from "./pages/User"
import ClotheServices from "./services/clothes_services";
import CategoryServices from "./services/categories_service";
import { login ,logout} from "./services/session_service";
import UserServices from "./services/user_services";


const reducerGeneral = (state , action) =>{
  let newState = {}
  switch (action.type) {
    case "LOGIN":
      newState = {...state,user:{...action.payload,favorites:[...action.payload.favorites],buy:[...action.payload.buys]}}
      console.log(state , newState)
      return newState;
    case "LOGOUT":
      newState = {...state,user:{...action.payload,favorites:[],wants:[],buys:[]}}
      return newState
    case "SIGNUP":
        newState = {...state,user:{...action.payload,
          favorites:[...action.payload.favorites],
          wants:[...action.payload.wants],
          buys:[...action.payload.buys]}}
          console.log(state,newState,"show user")
        return newState;
    case "SHOW USER":
      newState = {...state,user:{...action.payload,
        favorites:[...action.payload.favorites],
        wants:[...action.payload.wants],
        buys:[...action.payload.buys]}}
        console.log(state,newState,"show user")
      return newState;
    case "UPDATE USER":
      newState = {...state, user:{...action.payload,favorites:[...action.payload.favorites]}}
      console.log(state , newState , "aca se renderiza el favorito")
      return newState
    case "CREATE CLOTHE":
      newState = {...state,clothes:[...state.clothes,{...action.payload,service_url:[...action.payload.service_url]}]}
      console.log(state , newState)
      return newState
    case "UPDATE CLOTHE":
      const newDataClothe = state.clothes.map(clothe=>{
        if(clothe.id === action.payload.id){
          return {...action.payload,service_url:[...action.payload.service_url]}
        }
        else {
          return clothe
        }
      })
      newState = {...state,clothes:newDataClothe}
      return newState;
    case "DELETE CLOTHE":
        const filterClothe = state.clothes.filter(clothe=> 
          clothe.id !== action.payload.id
        )
        newState = {...state, clothes: [...filterClothe]}
        return newState;
    case "SET MODAL":
      newState = {...state,modal: action.payload }
      console.log(state, newState)
      return newState;
    case "SET UP":
      newState = {...state,clothes:[...action.payload.clothes],categories:[...action.payload.categories]};
      console.log(state, newState)
      return newState;
    case "MODE EDITOR":
      newState = {...state,edit:action.payload}
      return newState
    case "MODE NORMAL":
      newState = {...state,edit:action.payload}
      return newState
    case "CREATE CATEGORY":
      newState ={...state,categories:[...state.categories,{...action.payload}]}
      return newState;
    case "UPDATE CATEGORY":
        const  newCategory = state.categories.map(category => {
          if(category.id === action.payload.id){
            return {...action.payload}
          }
          else {
              return category
            }
          })
      newState = {...state,categories:[...newCategory]}
      return newState;
    case "DELETE CATEGORY":
      const filterCategory = state.categories.filter(category=> 
        category.id !== action.payload.id
      )
      newState = {...state, categories: [...filterCategory]}
      return newState;
    case "SELECT CATEGORY":
      newState = {...state,current_category:action.payload}
      return newState
    case "SELECT CLOTHE":
      newState = {...state,current_clothe:action.payload}
      console.log(state,newState ,"funcion que cambia el clothe")
      return newState
    case "OPTION VIEW":
      newState ={...state,option:action.payload}
      return newState;
    default:
      return state;
  };
}

function App() {
  
  
  const [state, dispatch] = useReducer(reducerGeneral , 
    {user:{favorites:[],buys:[]} , 
    categories:[] , 
    clothes:[] , 
    edit:false , 
    modal:"", 
    current_category:0, 
    current_clothe:0,
    option: "new"})

  const loginService = async (userData) => {
    const loginData = await login(userData.mail , userData.password)
    console.log(loginData,"data login")
    if(loginData.token){
      dispatch({type:"LOGIN" , payload : {...loginData,favorites:[...loginData.favorites],buys:[...loginData.buys]}})
      sessionStorage.setItem("token",loginData.token)
      return true;
    }
    else{
      return false;
    }
  }
  const signup = async (userData) => {
    const userService = new UserServices();
    const dataNewUser = await userService.create({...userData})
    if(dataNewUser.token){
      dispatch({type:"SIGNUP" , payload : {...dataNewUser}})
    sessionStorage.setItem("token" , dataNewUser.token)
    sessionStorage.setItem("user_id",dataNewUser.id)
    }
    
  }

  const showUser = async (user_id)=>{
    const userService = new UserServices();
    const dataUser = await userService.show(user_id);
    dispatch ({type:"SHOW USER", 
    payload:{...dataUser, 
      favorites:[...dataUser.favorites],
      wants:[...dataUser.wants],
      buys:[...dataUser.buys]
      }})
  }

  const logoutService = async ()=>{
    const dataLogut = await logout()
    if(dataLogut.message === "ok"){
      dispatch({ type:"LOGOUT" , payload:{favorites:[],wants:[],buys:[]}})
      sessionStorage.setItem("token",null)
      sessionStorage.setItem("user_id",null)
    }

  }

  const favoriteUser = async (clothe_id )=>{
    const userId = state.user.id;
    const userService = new UserServices();
    const dataUser = await userService.favorite(userId,clothe_id)
    dispatch({type:"UPDATE USER", payload:{...dataUser,favorites:[...dataUser.favorites]}})

  }

  const createClothe = async (formData , category_id) => {
    const clotheService = new ClotheServices();
    const newClothe = await clotheService.create(formData, category_id);
    dispatch({type:"CREATE CLOTHE" , payload : {...newClothe,service_url:[...newClothe.service_url]}})
  }

  const updateClothe = async (formData , category_id , clothe_id) =>{
    const clotheService = new ClotheServices();
    const updateData = await clotheService.update(formData, category_id , clothe_id)
    dispatch({type:"UPDATE CLOTHE",payload:{...updateData,service_url:[...updateData.service_url]}})
  }

  const deleteClothe = async (category_id,clothe_id)=>{
    const clotheService = new ClotheServices();
    const deleteData = await clotheService.delete(category_id,clothe_id);
    if(deleteData.message === "ok"){
      dispatch({type:"DELETE CLOTHE", payload:{id:clothe_id}})
    }
  }

  const setModalType = (data)=>{
    dispatch({type:"SET MODAL" , payload:data})
  }

  const setUp = async ()=>{
    const clothesService = new ClotheServices();
    const dataClothes = await clothesService.index(1);
    const categoriesServices = new CategoryServices();
    const dataCategories = await categoriesServices.index();
    const NEWSTORE = await {clothes:[...dataClothes ], categories: [...dataCategories]}
    dispatch({type:"SET UP", payload:{...NEWSTORE}})
  }

  const createCategory = async (formData)=>{
    const categoryService = new CategoryServices();
    const newCategory = await categoryService.create(formData);
    dispatch({type:"CREATE CATEGORY", payload:{...newCategory}})
  }

  const updateCategory = async (formData , id)=>{
    const categoryService = new CategoryServices();
    const dataUpdate = await categoryService.update(formData , id)
    console.log(dataUpdate , "respuesta api")
    dispatch({type:"UPDATE CATEGORY", payload:{...dataUpdate}})

  }

  const deleteCategory = async (category_id)=>{
    const categoryService = new CategoryServices();
    const deleteData = await categoryService.delete(category_id);
    if(deleteData.message === "ok"){
      dispatch({type:"DELETE CATEGORY", payload:{id:category_id}})
    }
  }

  const modeEditor = (data) =>{
    dispatch ({type:"MODE EDITOR", payload:data})
  }

  const selectCategory = (id) =>{
    dispatch ({type:"SELECT CATEGORY", payload:id})
  }

  const selectClothe = (id) =>{
    dispatch ({type:"SELECT CLOTHE", payload:id})
  }

  const optionView =(data)=>{
    dispatch({ type: "OPTION VIEW", payload:data})
  }


  useEffect(() => {

      setUp();
      if(sessionStorage.getItem("token")){
        showUser(sessionStorage.getItem("user_id"))
      }
  }, [])
  
  
  return (
    <div>
      
      <DataContext.Provider
      value={{loginService , 
        state , 
        signup , 
        createClothe, 
        setModalType, 
        modeEditor , 
        createCategory,
        selectCategory,
        selectClothe,
        updateCategory,
        deleteCategory,
        updateClothe,
        deleteClothe,
        favoriteUser,
        logoutService,
        optionView,
      }}
      >

      <Router>
          <Switch>
            <Route path="/category/:category_id/clothe/:id" component={Clothe}/>
            <Route path="/category/:category_id" component={Category}/>
            <Route path="/user" component={User}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login}/>
            <Route path="/test" component ={Library}/>
            <Route path="/" component={Main} /> 
          </Switch>
        </Router>
      </DataContext.Provider>
      </div>
  
  );
  
}

export default App;