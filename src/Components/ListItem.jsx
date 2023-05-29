import React, { useContext } from 'react'
import { editTransaction,deleteTransaction} from '../Context/GlobalAction'
import GlobalContext from '../Context/GlobalContext'
import { toast } from 'react-toastify'


const ListItem = ({transaction})=>{
    const { dispatch} = useContext(GlobalContext)
    const handleDelete = (id)=>{
        const data = deleteTransaction(id)

        dispatch({
            type:"DELETE",
            payload:data
        })
        toast("Transaction Delete")
    }
    
    const handleEdit = (transaction)=>{
        const data = editTransaction(transaction)
        dispatch({
            type:"EDIT",
            payload:data
        })
        toast("Transaction Edit")
    }
   
    return (
        <li className="list-item">
            <span>
                <h3 className={transaction.amount > 0 ? "income-transaction" : "expense-transaction"}>₹{transaction.amount}</h3>
                <h4>{transaction.text}</h4>
            </span>
            <button className="delBtn" onClick={()=>handleDelete(transaction.id)}><i class="bi bi-trash"></i></button>
            <button className='updBtn'onClick={()=>handleEdit(transaction)}><i class="bi bi-pencil-square"></i></button>
        </li>
    )
}

export default ListItem