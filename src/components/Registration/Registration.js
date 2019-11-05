import React from 'react';
import './registration.css';
import { Formik } from 'formik';



class Registration extends React.Component {

  render() {
    return (
      <form id="registration">
        <div>Enter your registration information.</div>
        <div class="bold-text">Input your First name</div>
        <input placeholder="First name" class="registration__input"></input>
        <div class="bold-text">Input your email</div>
        <input placeholder="example@mail.com" class="registration__input"></input>
        <div class="bold-text">Input your password</div>
        <input placeholder="password" class="registration__input"></input>
        <button class="registration__btn">Register</button>
      </form>);
  }
}

export default Registration;
