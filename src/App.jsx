import React, { useState } from 'react'
import Darkmode from './Components/Tooglebar'
import { GlobalProvider } from './Context/GlobalContext'
import ExpenseSection from './Components/ExpenseSection';
import ListGroup from './Components/ListGroup';
import BalanceSection from './Components/BalanceSection';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
   <GlobalProvider>
  <Darkmode />
  <div className='container'>
    <BalanceSection/>
    <ExpenseSection/>
    <ListGroup/>
  </div>
  <ToastContainer/>
   </GlobalProvider>
  );
}

export default App
