import React, { Component } from 'react';
import './Auth.css'
import assets from "./assets" 
import authContext from './Super/Pages/context/auth-context';
import { Link,NavLink } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";
class AuthPage extends Component {
    state = {
      isLogin: true
    }
    static contextType = authContext;
    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
      }
    
      switchModeHandler = () => {
        this.setState(prevState => {
          return { isLogin: !prevState.isLogin };
        });
      };
    
      submitHandler = event => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;
    
        if (email.trim().length === 0 || password.trim().length === 0) {
          return;
        }
    
        let requestBody = {
          query: `
            query {
              login(email: "${email}", password: "${password}") {
                userId
                token
                tokenExpiration
              }
            }
          `
        };
    
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
    
        fetch('http://localhost:8000/graphql', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            if (res.status !== 200 && res.status !== 201) {
              throw new Error('Failed!');
            }
            return res.json();
          })
          .then(resData => {
            if (resData.data.login.token) {
              this.context.login(
                resData.data.login.token,
                resData.data.login.userId,
                resData.data.login.tokenExpiration
              );
            }
          })
          .catch(err => {
            console.log(err);
          });
      };
    
      render() {
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
    <form className="formFields" onSubmit={this.submitHandler} >
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
          ref={this.emailEl}
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
          ref={this.passwordEl}
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
    }
    
    export default AuthPage;