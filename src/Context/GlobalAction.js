export const saveTransaction = (text,amount)=>{
    const newTransaction = {
        id : crypto.randomUUID(),
        text,
        amount : parseInt(amount) 
    }
    return newTransaction;
};

export  const deleteTransaction = (id)=>{
    return id
}

export const updateTransaction = (id,amount,text)=>{
    const updateTransaction={
        id:id,
        text:text,
        amount:amount
    }
    return updateTransaction
}

export const editTransaction = (transaction)=>{
    return transaction
}

