import logo from './logo.svg';
import './App.css';
import FormPage from './components/Formpage';
import Post from './components/post';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Mainpage from './components/Mainpage';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loginname:["test"],
      passwd:["test"],
      isloggedin:false
    }
  }


  logininfo=()=>{
    this.setState({isloggedin:true})
  }

  handleregistration=(a,b,e)=>{
    // e.preventDefault();
    console.log(a,b);
    this.setState({
      loginname:[...this.state.loginname,a],
      passwd:[...this.state.passwd,b]
    })
  }
   
  render() {
    return (<>
       <div className='App' id="app">
        <Routes>
          <Route path="/" element={<FormPage loginname={this.state.loginname} passwd={this.state.passwd} loginfn={this.logininfo} sendregisterdata={this.handleregistration}/>}> 
          {/* */}
          </Route>
          {  this.state.isloggedin &&
          <Route path="/feed" element = {<Mainpage loginname={this.state.loginname}/>} >
          </Route>
          } 
        </Routes>
        </div> 
        </>
  );
}
// render() {
//   return (
//     <div className='App' id="app">
//       Instagram clone page

//     <FormPage></FormPage>
//     <Modal></Modal>
//     </div>
//   )
// }
}



export default App;
