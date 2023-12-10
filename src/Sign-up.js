import React, { useState } from 'react';
import './Auth.css'
import assets from './assets';
import { Link } from "react-router-dom";

export default function SignUp()  {
    // state = {
    //   isLogin: null
    // }
    // static contextType = authContext;
    // constructor(props) {
    //     super(props);
    //     this.emailEl = React.createRef();
    //     this.passwordEl = React.createRef();
    //   }
    
    //   switchModeHandler = () => {
    //     this.setState(prevState => {
    //       return { isLogin: !prevState.isLogin };
    //     });
    //   };
    
    //   submitHandler = event => {
    //     event.preventDefault();
    //     const email = this.emailEl.current.value;
    //     const password = this.passwordEl.current.value;
    
    //     if (email.trim().length === 0 || password.trim().length === 0) {
    //       return;
    //     }
    
    //     let requestBody = {
    //       query: `
    //       mutation {
    //         createUser(userInput:{email:"saif@gmail.com",password:"saif"}) {
    //          email
    //          _id
    //         }
    //       }
    //       `
    //     };
    
    //     // if (!this.state.isLogin) {
    //     //   requestBody = {
    //     //     query: `
    //     //       mutation {
    //     //         createUser(userInput: {email: "${email}", password: "${password}"}) {
    //     //           _id
    //     //           email
    //     //         }
    //     //       }
    //     //     `
    //     //   };
    //     // }
    
    //     fetch('http://localhost:8000/graphql', {
    //       method: 'POST',
    //       body: JSON.stringify(requestBody),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //       .then(res => {
    //         if (res.status !== 200 && res.status !== 201) {
    //           throw new Error('Failed!');
    //         }
    //         return res.json();
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   };
    const [name, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("User");
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
              window.location.href = "/";
            } else {
              alert("Something went wrong");
            }
          });
      
    };
  


        return (
        <div className="App">
        <div className="appAside" >
        <img src={assets.images.frontpage}></img>
        <p>Welcome to our website</p>
        </div>
        <div className='appForm'>          
      <div className="formCenter">
            <form onSubmit={handleSubmit} className="formFields">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="formFieldInput"
                  placeholder="Enter your full name"
                  name="name"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}

                />
              </div>
              <div className="formField">
                <label className="formFieldCheckboxLabel">
                  <input
                    className="formFieldCheckbox"
                    type="checkbox"
                    name="hasAgreed"
                    
                  />{" "}
                  I agree all statements in{" "}
                  <a href="null" className="formFieldTermsLink">
                    terms of service
                  </a>
                </label>
              </div>
    
              <div className="formField">
                <button className="formFieldButton">Sign Up</button>{" "}
                <Link to="/" className="formFieldLink">
                  I'm already member
                </Link>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
      }

   
