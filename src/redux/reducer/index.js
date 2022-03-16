const initialState = {
  isLogin: false || window.localStorage.getItem("AUTH"),
  isAdmin: true,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOGIN") {
    return {
      ...state,
      isLogin: action.value,
    };
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  if(action.type === "ADMIN"){
    return {
      ...state,
      isAdmin: action.value,
    }
  }
  return state;
};


export default reducer;