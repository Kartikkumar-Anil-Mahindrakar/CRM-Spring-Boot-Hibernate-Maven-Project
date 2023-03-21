import React from 'react'
import CustomerCard from './CustomerCard'

function CustomerList({customers}) {

    const deleteCustomer = (customerId)=>{
        fetch(`http://localhost:8080/customers/${customerId}`,{
            method:"DELETE"
        })
        .then(response=>{
            console.log(response)
        })
        
    }

  return (
    <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',maxHeight:'400px',overflowX:'hidden',border:'4px ridge black',borderRadius:'10px'}}>

        { 
            customers && customers.length > 0 
            ? 
            <>
                {customers.map((cust,idx)=>{
                    return <CustomerCard key={idx} customer={cust} deleteCustomer={deleteCustomer}/>
                })}
            </> 
            :
            <div>
                <h1>No Customers Found</h1>
            </div>
        }
    </div>
  )
}

export default CustomerList