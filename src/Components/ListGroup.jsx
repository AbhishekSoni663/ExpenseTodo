import React, { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
import ListItem from './ListItem';


const ListGroup=()=>{
    const {transactions} =useContext(GlobalContext)

    return (
       <ul className='list-group'>
        {
            transactions.map(transaction => <ListItem key={transaction.id} transaction={transaction}/>)
        }
       </ul>
    )
}

export default ListGroup