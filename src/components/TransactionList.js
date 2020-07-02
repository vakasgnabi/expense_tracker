import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const TransactionList = () => {
    const {transactions}=useContext(GlobalContext);
    const {deleteTransaction}=useContext(GlobalContext);
    return (
        <>
        
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction=>(<li key={transaction.id} className={transaction.amount>0?"plus":"minus"}>
                       {transaction.text}
    <span>${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
               </li>))}
                   
       
                
                
            </ul>
        </>
    )
}
