import React, { useContext,  useEffect,  useReducer } from "react";
import reducer from "./Reducer";
import axios from "axios";
import { data } from "../config/data";
// import { data } from "../config/data";

// Create a new context
const AppContext = React.createContext();

// Define the API URL

// Define the initial state of the application
const initialState = {
    DefaultLanguage: "english",
    isLoading: true,
    isSingleLoading: true,
    searchLoding: true,
    categoryLoading: true,
    isError: false,
    recipes: [],
    singleRecipe: [],
  }

  // Define the AppProvider component
const AppProvider = ({ children }) => {
  // Use the useReducer hook to manage state using the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);



  //get all particular chapter
  const fetchRecipe = async (url) => {
    dispatch({type: "SET_RECIPES_LOADING"})
    try {
        const response = await axios.get(`https://api.edamam.com/${url}`);
        const data = response.data;
        console.log(data)
      dispatch({type: "GET_RECIPES", payload: data})
    } catch (error) {
      dispatch({type: "API_ERROR"})
    }
  };



  //get all shlok from particular chapter
  const fetchByCategory = async (url) => {
    dispatch({type: "SET_CATEGORY_LOADING"})
    try {
      const response = await axios.get(`https://api.edamam.com/${url}`);
      const data = response.data;
      dispatch({type: "GET_RECIPES_CATEGORY", payload: data})
    } catch (error) {
      dispatch({type: "SET_CATEGORY_ERROR"})
    }
  };

  useEffect(()=>{
    fetchRecipe()
  }, [])



  return <AppContext.Provider value={{...state,fetchRecipe, fetchByCategory}} >
  {children}
  </AppContext.Provider>;
};

//global custom hook

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}