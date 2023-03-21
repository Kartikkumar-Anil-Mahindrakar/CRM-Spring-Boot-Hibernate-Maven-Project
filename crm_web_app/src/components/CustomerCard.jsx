import React from 'react'

function CustomerCard({customer,deleteCustomer}) {
  const card = {
    border:"1px solid black",
    borderRadius:'10px',
    width:'300px',
    margin:'20px',
    padding:'10px',
    
    
  }
  return (
    <div style={card}>
        <h3>Id : {customer.id}</h3>
        <h3>First name :{customer.firstName}</h3>
        <h3>Last name :{customer.lastName}</h3>
        <h3>Email : {customer.email}</h3>
        <h3>Salary : {customer.salary}</h3>
        <input type="button" value="Delete" style={{fontSize:'20px',textAlign:'center',width:'70%',borderRadius:'5px',backgroundColor:'lightcoral',cursor:'pointer'}} onClick={()=>deleteCustomer(customer.id)}/> 
    </div>
  )
}

export default CustomerCard