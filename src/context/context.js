import React,{useReducer,createContext} from 'react'

import contextReducer from './contextReducer'
const initialState = JSON.parse(localStorage.getItem('transitions')) || [{"amount":100,"category":"House","type":"Expense","date":"2022-01-01","id":"12dba84e-8546-43a7-817d-7167f5b3410f"},{"amount":500,"category":"Business","type":"Income","date":"2022-07-26","id":"9f3d3a94-d0f4-4cf8-b73a-2bc7a87b596f"},{"amount":100,"category":"Salary","type":"Income","date":"2022-07-26","id":"35c336f2-9757-40aa-bfbb-61ccc16740ba"},{"amount":200,"category":"Food","type":"Expense","date":"2022-07-25","id":"6d9a2ce9-1ba9-487c-af37-a0617360ac2d"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({type: 'DELETE_TRANSACTION',payload: id});
    }

    const addTransaction = (transaction) => {
        dispatch({type: 'ADD_TRANSACTION',payload: transaction});
    }
    const balance = transactions.reduce((acc, currVal)=>{
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    },0);
    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransaction,addTransaction, transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}