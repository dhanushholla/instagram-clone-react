
import "./App.css";
import FormPage from "./components/Formpage";
import React, { Component } from "react";
import {  Routes, Route,  Navigate } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import ImgList from "./components/imagelist"
import Notifies from "./components/notifies";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginname: "", //going to store currently logged person username
      isloggedin: false,
      usercreds: [{ logname: "test", pass: "test" }],
      newprofilepicture: "",
    };
  }

  logininfo = (a) => {
    this.setState({ isloggedin: true, loginname: a });
    // this.setState({loginname:a})
  };

  handleregistration = (a, b, e) => {
    // e.preventDefault();
    console.log(a, b);
    this.setState({
      // loginname:[...this.state.loginname,a],
      // passwd:[...this.state.passwd,b],
      usercreds: [...this.state.usercreds, { logname: a, pass: b }],
    });
  };
  setprofilepicture = (a) => {
    this.setState({ newprofilepicture: a });
  };
  render() {
    return (
      <>
        <div className="App" id="app">
          <Routes>
            <Route
              path="/"
              element={
                <FormPage
                  loginname={this.state.loginname}
                  passwd={this.state.passwd}
                  loginfn={this.logininfo}
                  sendregisterdata={this.handleregistration}
                  usercreds={this.state.usercreds}
                  setpp={this.setprofilepicture}
                />
              }
            ></Route>
            {this.state.isloggedin && (
              <Route
                path="/feed"
                element={
                  <Mainpage
                    loginname={this.state.loginname}
                    profile={this.state.newprofilepicture}
                  />
                }
              ></Route>
              
            )}
             {this.state.isloggedin && (
            <Route path="/imgs" element={<ImgList/>}/>
             )}
              {this.state.isloggedin && (
            <Route path="/notifies" element={<Notifies/>}/>
             )}
            <Route
              path="*"
              element={<Navigate to="/" replace></Navigate>}
            ></Route>
            {/* the above route seeks if there is no suitable path(*) available for the given request,then the route request is replaced and navigated to our preferred page ie here / ==> formpage */}
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
