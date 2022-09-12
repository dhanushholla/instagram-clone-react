import React, { Component } from 'react'
import Post from './post'
import './Mainpage.css'
import {Link} from 'react-router-dom'
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

let newcaption="",newimage="",newcomment=[""]
class Mainpage extends Component {
  constructor(props) {
    super(props);
  this.state = {
      showform:false,
    postdatas:[
    {
      profilepic:"https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      username:"Holla",
      caption:"winter is coming!!!",
      mainimage:"https://images.unsplash.com/photo-1662436267861-784747134719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    
    },
    {
      profilepic:"https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", 
      username:"Anu",
      caption:"pennae pennae!!  ",
      mainimage:"https://images.unsplash.com/photo-1463062511209-f7aa591fa72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmRzY2FwZSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
     
    },
    {
      profilepic:"https://images.unsplash.com/photo-1529911194209-8578109840df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      username:"Vani",
      caption:"Sorgam vaanillae :)",
      mainimage:"https://images.unsplash.com/photo-1662537889707-e6a8604dbb4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    
    }
  ]
  }
}
    handleAddpost =()=>{
        this.setState({
            showform:true,
        }
      )
    }
    handleClosepost =(e)=>{
      this.setState({
        showform:false
      })
    }
    handlenewCaption =(e)=>{
        newcaption=e.target.value;
    }
    handlenewImage = (e)=>{
      newimage=URL.createObjectURL(e.target.files[0])
    }

    handlenewpost =(e)=>{
      e.preventDefault();
      console.log("state is changed");
      this.setState({       
        // postdatas:[{profilepic:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",username:"tester",caption:newcaption,mainimage:newimage,comments:newcomment},...this.state.postdatas,],
        postdatas:[...this.state.postdatas,{profilepic:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",username:"tester",caption:newcaption,mainimage:newimage,comments:newcomment}], 
        showform:false
      })
      window.scrollTo(0,0);

    } 

  render() {
    return (
    <React.Fragment>
      <div className='result'>
      <nav className='navbar'>
      <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="logo"></img>
      <button onClick={this.handleAddpost} className="addpostbtn">add post</button>
      <Link to="/" className='Linkcls'><button className='logoutbtn'>Logout</button></Link>
      </nav>
      <div className='feedposts'>
       { this.state.postdatas.map(
        (post)=>(<Post name={post.username} image={post.mainimage} caption={post.caption} profilepic={post.profilepic}></Post>)
        )
       }
      </div>
      </div>
      {
        this.state.showform &&
        (
            <div className="new-form" >
                <form>
                <div>
                <label>Newpost-Caption:</label>
                  <input type="text" placeholder="enter caption" onChange={this.handlenewCaption} autoFocus required/>
                  </div>
                  <div className='new-imageupload'>
                  <label>NewImage:</label>
                  <input type="file" onChange={this.handlenewImage} required></input>
                  </div>
                  <div>
                  <button type='submit' onClick={this.handlenewpost}>upload post</button>
                  <button onClick={this.handleClosepost}>close form</button>
                  </div>
                </form>
            </div>
        )
      }
      </React.Fragment>

    )
  }
}

export default Mainpage
