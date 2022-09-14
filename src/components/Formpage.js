import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Formpage.css'
import Mainpage from './Mainpage';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

class Formpage extends Component {
  constructor(props) {
    super(props)
    // console.log("form constructor")
    this.state = {
      currentname:"",
      currentpswd:"",
      showsignup:false,
      newname:"",
      newpassword:""
    }
  }
  registername=(e)=>{
    this.setState({newname:e.target.value})
  }
  registerpassword=(e)=>{
    this.setState({newpassword:e.target.value}) 
  }
  handlesignup=()=>{
    this.setState({showsignup:!this.state.showsignup})
  }
  namedetailspopulate=(e)=>{
  this.setState({currentname:e.target.value})    
  // currentname=e.target.value
    // console.log("Cur:",this.state.currentname)
    // console.log("propname:",this.props.loginname)
  }
  loginerror=()=>{
    // console.log(this.state.currentname===this.props.loginname &&this.props.passwd===currentpswd)
    alert("invalid credentials");
    // setTimeout(()=>{window.reload();},5500);
  }
  pswddetailspopulate=(e)=>{
    this.setState({currentpswd:e.target.value}) 
    // currentpswd=e.target.value
    // console.log("cur paswd:",currentpswd)
    // console.log("proppass:",this.props.passwd)
  }
  render(props) {
    // console.log("form render")
    return (
      <div>
      
        <div className="container">        
        <form className="formbody">
            <div className="heading">
            </div>
            <div className="inputfield">
                <input type="text" placeholder="Phone number, username, or email" onChange={this.namedetailspopulate}/>
            </div>
            <div className="inputfield">
                <input type="password" placeholder="Password" onChange={this.pswddetailspopulate} />
            </div>
            { 
              (this.props.loginname.includes(this.state.currentname) &&  this.props.passwd.includes(this.state.currentpswd))?<Link to="/feed"><button onClick={this.props.loginfn} className="login" >Log In</button></Link>//
              :<button className="login" onClick={this.loginerror}>Log In</button>
            }
            {/* <button className='register'>Register</button>   */}
            <div className="separator">
                <div className="line"></div>
                <p> OR </p>
                <div className="line"></div>
            </div>
            <div className="fb-forgot">
                <button className="fb-login-btn" type="button">
                    <i className="fa fa-facebook-official fb-icon"></i>
                    <span className="">  Log in with Facebook</span>
                </button>
            <a href="#">Forgot password?</a>
            </div>
        </form>
        <div className="signup">
            <span>Don't have an account? <a onClick={this.handlesignup}>Sign up</a></span>
        </div>
        <div className='download-btn-icons'>
          <img src="data:image/png;base64,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" alt="footer/banner image"></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlPUW7cydyPhzbGiUWPWUWKpGjZmp0BZjUQ&usqp=CAU"></img>
        </div>
    </div>
    <ToastContainer/>
    { this.state.showsignup ?
    <div className="signup">
     Register Yourself:
        <input type="text" placeholder='enter name' onChange={this.registername}/>
        <input type="text" placeholder='set a new password' onChange={this.registerpassword}/>
        <input type="text" placeholder='retype password'/>
        {/* <button>proceed!</button> */}
        <button onClick={() => {
          this.props.sendregisterdata(this.state.newname,this.state.newpassword);
          toast.success('User registered proceed with login', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
          this.setState({
            showsignup:!this.state.showsignup
          })
          }}>proceed!</button>
    </div>:""
  }
      </div>
    )
  }
}
export default Formpage
