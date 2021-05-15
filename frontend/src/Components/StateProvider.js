import React ,{createContext,useContext,useReducer}from "react";
export const StateContext=createContext();
//Wrap our app and  provide data layer to each component
export const StateProvider=({reducer,initialState,children})=>
(
    <StateContext.Provider value={useReducer(reducer,initialState)}>{children}</StateContext.Provider>
);
export const useStateValue=()=>useContext(StateContext);