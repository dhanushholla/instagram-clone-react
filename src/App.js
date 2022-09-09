import logo from './logo.svg';
import './App.css';
import FormPage from './components/Formpage';
import Post from './components/post';
import Modal from './components/Modal';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
   
  render() {
    return (<>
       <div className='App' id="app">
        <Routes>
          <Route path="/" element={<FormPage/>}>
          </Route>
            
          <Route path="/feed" element = {<Modal/>} >
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
