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
      
    case "SET_CATEGORY_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_RECIPES_CATEGORY":
      return {
        ...state,
        isLoading: false,
        recipes: action.payload,
      };
    case "SET_CATEGORY_ERROR":
      return {
        ...state,
        isLoading: true,
        isError: true,
      };


    default:
      return state;
  }
};

export default reducer;
