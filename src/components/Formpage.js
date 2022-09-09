import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Formpage.css'
import Modal from './Modal';
class Formpage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loginname:""
    }
  }
  namepopulate=(e)=>{
    this.setState({
      loginname:e.target.value
    })
    // localStorage.setItem("loginname",this.state.loginname)
  }
  render() {
    return (
      <div>
        <div class="container">        
        <form class="formbody">
            <div class="heading">
            </div>
            <div class="inputfield">
                <input type="text" placeholder="Enter username or password" onChange={this.namepopulate}/>
            </div>
            <div class="inputfield">
                <input type="password" placeholder="Enter password"/>
            </div>
            <Link to="/feed"><button class="login">Log In</button></Link>
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
