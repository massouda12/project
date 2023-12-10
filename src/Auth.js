import React, { useState } from 'react';
import './Auth.css'
import axios from 'axios';
import assets from "./assets" 
import { Link,NavLink } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";
export default function AuthPage() {

    // state = {
    //   isLogin: true
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
    //         query {
    //           login(email: "${email}", password: "${password}") {
    //             userId
    //             token
    //             tokenExpiration
    //           }
    //         }
    //       `
    //     };
    
        // if (!this.state.isLogin) {
        //   requestBody = {
        //     query: `
        //       mutation {
        //         createUser(userInput: {email: "${email}", password: "${password}"}) {
        //           _id
        //           email
        //         }
        //       }
        //     `
        //   };
        // }
    
      //   fetch('http://localhost:8000/graphql', {
      //     method: 'POST',
      //     body: JSON.stringify(requestBody),
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   })
      //     .then(res => {
      //       if (res.status !== 200 && res.status !== 201) {
      //         throw new Error('Failed!');
      //       }
      //       return res.json();
      //     })
      //     .then(resData => {
      //       if (resData.data.login.token) {
      //         this.context.login(
      //           resData.data.login.token,
      //           resData.data.login.userId,
      //           resData.data.login.tokenExpiration
      //         );
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // };
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [enabled,setEnabled] = useState(true);
    
      function handleSubmit(e) {
        e.preventDefault();
    
        console.log(email, password,enabled);
        axios.post("http://localhost:5000/login-user", {
          email,
          password,
          enabled,
        }, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          }
        })
        .then((response) => {
          console.log(response.data, "userRegister");
          const data = response.data;
          
          if (data.status === "ok") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
            window.location.href = "/userDetails";
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    }
        return (
        <div className="App">
    <div className="appAside" >
        <img src={assets.images.frontpage}></img>
        <p>Welcome to our website</p>
    </div>
    <div className="appForm">
      <div className="formTitle">
        <NavLink
          to="/sign-in"
          activeClassName="formTitleLink-active"
          className="formTitleLink"
        >
          Sign In
        </NavLink>{" "}
        or{" "}
        <NavLink
          exact
          to="/Sign-up"
          activeClassName="formTitleLink-active"
          className="formTitleLink"
        >
          Sign Up
        </NavLink>
    <div className="formCenter">
    <form className="formFields" onSubmit={handleSubmit} >
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
        <button className="formFieldButton">Sign In</button>{" "}
        <Link to="/sign-up" className="formFieldLink">
          Create an account
        </Link>
      </div>

      <div className="socialMediaButtons">
        <div className="facebookButton">
          <FacebookLoginButton onClick={() => alert("Hello")} />
        </div>

        <div className="instagramButton">
          <InstagramLoginButton onClick={() => alert("Hello")} />
        </div>
      </div>
    </form>
  </div>
  </div>
  </div>
  </div>
        );
      }
    
    
