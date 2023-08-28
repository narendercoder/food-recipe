const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    case "SET_RECIPES_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
      };

      case "SET_SEARCHED_RECIPES_LOADING":
      return {
        ...state,
        isSearchLoading: true,
      };
    case "GET_SEARCHED_RECIPES":
      return {
        ...state,
        searchedRecipe: action.payload,
        isSearchLoading: false,
      };
      
      
   


    default:
      return state;
  }
};

export default reducer;
