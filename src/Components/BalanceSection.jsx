import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../Context/GlobalContext';
import {updateTransaction,saveTransaction} from '../Context/GlobalAction';
import { toast } from 'react-toastify';

const BalanceSection = ()=>{

const {transactions, edit, dispatch} = useContext(GlobalContext)



const balance = transactions.reduce((p,c)=>{
    return p - c.amount
}, [])

const [text , setText] = useState("")
const [amount , setAmount] = useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
   if(edit.isEdit){
    const data = updateTransaction(edit.transaction.id,amount,text)
    dispatch({
        type:"UPDATE",
        payload:data
    })
    toast("Transaction Updated")
   }else{
    const data = saveTransaction(text,amount)
    dispatch({
        type:"SAVE",
        payload:data
    })
   }

   toast("Transaction Saved")

   setText("")
   setAmount("")
   
}
useEffect(()=>{
    setText(edit.transaction.text)
    setAmount(edit.transaction.amount)
},[edit])



    return(
        
        <div className="form-section">
            <div className='current-balance'>
                <span>
                <p>Current Balance</p>
                <h3>₹{balance}</h3>
                </span>
            </div>
            <form onSubmit={handleSubmit}>
                <input value={text} type="text" placeholder='Enter Your Transaction' onChange={(e)=>setText(e.target.value)}/>
                <input value={amount} type="number" placeholder='Enter Your Amount' onChange={(e)=> setAmount(e.target.value)}/>
                <button type ="submit" className='btn-submit'>Submit</button>
            </form>
        </div>
        
    )
}

export default BalanceSection