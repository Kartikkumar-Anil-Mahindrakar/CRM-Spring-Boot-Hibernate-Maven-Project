import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CustomerForms from './components/CustomerForms';
import CustomerList from './components/CustomerList';

function App() {
  const [customers,setCustomers] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/customers")
    .then(response=>{
      return response.json();
    })
    .then(response=>{
      setCustomers(response);
    })
    
  })

  return (
    <div className="App">
      <CustomerForms/>
      <div style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}>
        <h2>List Of Customers : </h2>
        <div style={{width:'70%'}}>
          <CustomerList customers={customers} />
        </div>
      </div>
    </div>
  );
}

export default App;
