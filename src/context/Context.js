import React, { useContext,  useEffect,  useReducer } from "react";
import reducer from "./Reducer";
import axios from "axios";
import { data } from "../config/data";
// import { data } from "../config/data";

// Create a new context
const AppContext = React.createContext();


const initialState = {
    isLoading: true,
    isSearchLoading: true,
    isError: false,
    recipes: [],
    searchedRecipe: [],
    page: "",
  }

  // Define the AppProvider component
const AppProvider = ({ children }) => {
  // Use the useReducer hook to manage state using the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);



  const fetchRecipe = async () => {
    dispatch({type: "SET_RECIPES_LOADING"})
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=50&apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = response.data;
      
      dispatch({type: "GET_RECIPES", payload: data})
    } catch (error) {
      dispatch({type: "API_ERROR"})
      window.alert("api error")
    }
  };

  const getSearched = async(query) =>{
    dispatch({type: "SET_SEARCHED_RECIPES_LOADING"})
    try{
      const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=${query}&number=50`);
      const data = response.data.recipes     ;
      console.log(data)

      dispatch({type: "GET_SEARCHED_RECIPES", payload: data})
    }catch(error){
      dispatch({type: "API_ERROR"})
    }
  }


  useEffect(()=>{
    fetchRecipe()
  }, [])



  return <AppContext.Provider value={{...state,fetchRecipe, getSearched}} >
  {children}
  </AppContext.Provider>;
};

//global custom hook

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}