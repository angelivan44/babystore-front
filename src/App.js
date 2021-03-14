import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useReducer , useContext, useEffect } from "react"
import { Main } from './pages/Main'
import { Category } from "./pages/Category";
import { Clothe } from "./pages/Clothe";
import { Library } from "./pages/Library";
import { Login, SignUp } from "./pages/SignUp";
import DataContext from "./DataContext";
import {User} from "./pages/User"
import { STORE } from "./pages/storage";


const reducerGeneral = (state , action) =>{
  let newState = {}
  switch (action.type) {
    case "LOGIN":
      newState = {...state,user:{...action.payload,favorites:[...action.payload.favorites],buy:[...action.payload.buy]}}
      console.log(state , newState)
      return newState;
    case "SIGNUP":
        newState = {...action.payload}
        console.log(state , newState)
        return newState
    case "CREATE CLOTHE":
      newState = {...state,clothes:[...state.clothes,action.payload]}
      console.log(state , newState)
      return newState;
    case "SET MODAL":
      newState = {...state,modal: action.payload }
      console.log(state, newState)
      return newState;
    case "SET UP":
      newState = {...state,clothe:{...action.payload.user},categories:{...action.payload.user}};
      return newState;
    case "MODE EDITOR":
      newState = {...state,edit:action.payload}
      return newState
    case "MODE NORMAL":
      newState = {...state,edit:action.payload}
      return newState

    default:
      return state;
  };
}

function App() {
  
  
  const [state, dispatch] = useReducer(reducerGeneral , {user:{favorites:[],buy:[]} , categories:[] , clothes:[] , edit:false , modal:""})

  const login = (userData) => {
    const dataStoreUser = {...STORE.user,favorites:[...STORE.user.favorites],buy:[...STORE.user.buy]};
    if(userData.mail == dataStoreUser.mail){
      console.log(dataStoreUser)
      dispatch({type:"LOGIN" , payload : {...dataStoreUser,favorites:[...dataStoreUser.favorites],buy:[...dataStoreUser.buy]}})
      return true;
    }
    else {
      return false;
    }
  }
  const signup = (userData) => {
    dispatch({type:"SIGNUP" , payload : {...userData}})
  }

  const createClothe = (clotheData) => {
    dispatch({type:"CREATE CLOTHE" , payload : {...clotheData}})
  }

  const setModalType = (data)=>{
    dispatch({type:"SET MODAL" , payload:data})
  }

  const setUp = ()=>{
    dispatch({type:"SET UP", payload:{...STORE}})
  }

  const modeEditor = (data) =>{
    dispatch ({type:"MODE EDITOR", payload:data})
  }


  useEffect(() => {
    setUp();
  }, [])

  return (
    <div>
      
      <DataContext.Provider
      value={{login , state , signup , createClothe, setModalType, modeEditor}}
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