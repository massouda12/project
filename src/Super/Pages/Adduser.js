import React ,{useState} from 'react';

import "./Adduser.css"
export default function Addusers(){
  const [name, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
            window.location.href = "/main";
          } else {
            alert("User Exist or check your console!");
          }
        });
    
  };

    return (
        <div className='Title' >
        <h3 style={{textAlign:"center"}}>Creating Users </h3>
        <div className="auth-wrapper">
            <div className="auth-inner">
              <form onSubmit={handleSubmit}>
            <p>Name </p>  
             <input placeholder="Name" className="form-control" type="text"onChange={(e) => setLname(e.target.value)} /> <br />
             <p>Email </p>  
             <input  className="form-control"   onChange={(e) => setEmail(e.target.value)} /> <br />
             <p>Password </p>  
             <input placeholder="Password" className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} /> <br />
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
             <button>Submit</button>
             </form>
            </div>
        </div>

    </div>
    );
  }


