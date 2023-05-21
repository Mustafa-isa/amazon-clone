import { createContext, useReducer,useContext } from 'react';

// Define the initial state
const initialState = {
  basket: [],
  user: null
};

// Create the context
 const WebsiteContext = createContext(initialState);

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: action.user
      };
      case 'ADD_PRODUCT':
      return {
        ...state,
      basket:[...state.basket ,action.product]
      };
    default:
      return state;
  }
};

// Create the provider component
export const WebsiteProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <WebsiteContext.Provider value={{
      basket:state.basket,
      user:state.user,
      dispatch:dispatch
    }}>
      {props.children}
    </WebsiteContext.Provider>
  );
};
 export const Useapi =() =>{
  return useContext(WebsiteContext)
 }