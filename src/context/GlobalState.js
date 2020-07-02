import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';


let initialTransaction={
    transactions:[]
};

export const GlobalContext = createContext(initialTransaction);

export const GlobalState = ({children}) => {
    const[state,dispatch]=useReducer(AppReducer,initialTransaction);
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    return (
    <GlobalContext.Provider value={{transactions: state.transactions,
        deleteTransaction,
        addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
