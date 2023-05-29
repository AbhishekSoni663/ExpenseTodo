const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      }; 

    case "EDIT":
      return{
        ...state,
        edit:{transaction:action.payload, isEdit:true}
      }
      
    case "UPDATE":
      return{
        ...state,
        transactions:state.transactions.map(item=>item.id===action.payload.id ? {...item, text : action.payload.text, amount : action.payload.amount}:item),
        edit : {transaction:{}, isEdit:false}
      }
    default:
      return state;
  }
};

export default GlobalReducer;
