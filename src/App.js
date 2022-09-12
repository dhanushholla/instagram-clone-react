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
   
  render() {
    return (<>
       <div className='App' id="app">
        <Routes>
          <Route path="/" element={<FormPage/>}>
          </Route>
            
          <Route path="/feed" element = {<Mainpage/>} >
          </Route>
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
