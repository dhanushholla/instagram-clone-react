import React, { Component } from 'react';
import './Formpage.css'
class Formpage extends Component {
  render() {
    return (
      <div>
        <div class="container">        
        <form class="formbody">
            <div class="heading">
            </div>
            <div class="inputfield">
                <input type="text" placeholder="Enter username or password"/>
            </div>
            <div class="inputfield">
                <input type="password" placeholder="Enter password"/>
            </div>
            <button class="login">Log In</button>
            <div class="separator">
                <div class="line"></div>
                <p> OR </p>
                <div class="line"></div>
            </div>
            <div class="fb-forgot">
                <button class="fb-login-btn" type="button">
                    <i class="fa fa-facebook-official fb-icon"></i>
                    <span class="">Log in with Facebook</span>
                </button>
            <a href="#">forgot password?</a>
            </div>
        </form>
        <div class="signup">
            <span>Don't have an account? <a>Sign up</a></span>
        </div>
    </div>
      </div>
    )
  }
}

export default Formpage
