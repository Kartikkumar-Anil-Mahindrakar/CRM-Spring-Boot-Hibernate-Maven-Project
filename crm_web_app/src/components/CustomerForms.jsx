import React, { useRef } from 'react'

function CustomerForms() {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const salary = useRef();
    const id = useRef();
    
    const updatefirstName = useRef();
    const updatelastName = useRef();
    const updateemail = useRef();
    const updatesalary = useRef();

    const addNewCustomer = (e)=>{
        e.preventDefault();
        const data = {
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            email:email.current.value,
            salary:parseInt(salary.current.value)
        }
        console.log("data" , data);
        const url = "http://localhost:8080/customers";
        fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            }
            ,body:JSON.stringify(data)
        }).then(response=>{
            return response.json();
        }).then(response =>{
            console.log(response);
        })

        firstName.current.value = "";
        lastName.current.value="";
        email.current.value="";
        salary.current.value = 0;

    }

    const updateExistingCustomer = (e)=>{
        e.preventDefault();
        const data = {
            firstName:updatefirstName.current.value,
            lastName:updatelastName.current.value,
            email:updateemail.current.value,
            salary:parseInt(updatesalary.current.value)
        }
        console.log("data" , data);
        const url = `http://localhost:8080/customers/${parseInt(id.current.value)}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            }
            ,body:JSON.stringify(data)
        }).then(response=>{
            return response.json();
        }).then(response =>{
            console.log(response);
        })
        id.current.value=0;
        updatefirstName.current.value = "";
        updatelastName.current.value="";
        updateemail.current.value="";
        updatesalary.current.value = 0;

    }

    const inputStyle = {
        fontSize:'20px',
        width:'100%',
        marginBottom:'10px',
        marginTop:'5px'
    }
    const submitButtonStyle={
        fontSize:'20px',
        width:'100%',
        alignSelf:'center',
        margin:'10px',
        padding:'5px',
        border:"1px solid black",
        borderRadius:'5px',
    }

  return (
    <div style={{display:'flex',justifyContent:'center',justifyItems:'center',fontSize:'20px',fontWeight:'bold'}}>
        <form style={{display:'flex',flexDirection:'column',alignItems:'start',width:'50%',border:'1px solid black',padding:'20px',margin:'20px',borderRadius:'10px'}}>
            <h1>New Customer</h1>
            
            <label>Enter First Name</label>
            <input style={inputStyle} type='text' ref={firstName} placeholder="Sunil" required/>
            <label>Enter Last Name</label>
            <input style={inputStyle} type='text' ref={lastName} placeholder="Mishra" required/>
            <label>Enter Email</label>
            <input style={inputStyle} type='email' ref={email} placeholder="sunil@gmail.com" required/>
            <label>Enter Salary</label>
            <input style={inputStyle} type='number' ref={salary} placeholder="100000" />
            <button type='submit' style={submitButtonStyle} onClick={addNewCustomer}>Submit</button>
        </form>
        <form style={{display:'flex',flexDirection:'column',alignItems:'start',width:'50%',border:'1px solid black',padding:'20px',margin:'20px',borderRadius:'10px'}}>
            <h1>Update Customer</h1>
            <label>Enter Customer Id</label>
            <input style={inputStyle} type='number' ref={id} placeholder="0" required/>
            <label>Enter First Name</label>
            <input style={inputStyle} type='text' ref={updatefirstName} placeholder="Sunil" required/>
            <label>Enter Last Name</label>
            <input style={inputStyle} type='text' ref={updatelastName} placeholder="Mishra" required/>
            <label>Enter Email</label>
            <input style={inputStyle} type='email' ref={updateemail} placeholder="sunil@gmail.com" required/>
            <label>Enter Salary</label>
            <input style={inputStyle} type='number' ref={updatesalary} placeholder="100000" />
            <button type='submit' style={submitButtonStyle} onClick={updateExistingCustomer}>Update</button>
        </form>
        
    </div>
  )
}

export default CustomerForms