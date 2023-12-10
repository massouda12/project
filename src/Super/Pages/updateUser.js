import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import React, {useState } from "react";

function UpdateUser(){
    const [name, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("");
    const location=useLocation();
    useEffect(() =>{
        console.log(location)
        setLname(location.state.name)
        setEmail(location.state.email)
    },[])
    const updateData=() => {
        console.log(name,email)
        fetch("http://localhost:5000/updateUser", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                id:location.state._id,
                name:name,
                email:email,
                userType:userType,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              window.location.href="/main"
            });
        }
    return(
        <div className='Title' >
        <h3 style={{textAlign:"center"}}>Creating Users </h3>
        <div className="auth-wrapper">
            <div className="auth-inner">
            <p>Name </p>  
             <input placeholder="Name" className="form-control"  defaultValue={name} type="text"onChange={(e) => setLname(e.target.value)} /> <br />
             <p>Email </p>  
             <input placeholder="Email" className="form-control"defaultValue={email} type="email" onChange={(e) => setEmail(e.target.value)} /> <br />
             <div>
            <div className='label'>
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
            <input
              type="radio"
              name="UserType"
              value="Superadmin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Superadmin
          </div>
            </div>          
             <button onClick={updateData}>Update User</button>
            
            </div>
        </div>

    </div>
    )
}

export default UpdateUser