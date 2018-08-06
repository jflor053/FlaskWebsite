import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
class LoginPage extends Component {
  render() {
    return (
      <div>
       <h1> This is the login page </h1> 

       <LoginForm/>
      </div>
    )
  }
}
export default LoginPage;