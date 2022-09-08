import React, { Component } from 'react'
import Post from './post'
import './Modal.css'
let newcaption="",newimage=""
class Modal extends Component {
  constructor(props) {
    super(props);
  this.state = {
      showform:false,
    postdatas:[
    {
      profilepic:"https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      username:"Holla",
      caption:"winter is coming!!!",
      mainimage:"https://images.unsplash.com/photo-1662436267861-784747134719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      profilepic:"https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", 
      username:"Anu",
      caption:"pennae pennae undhan kayil naanum",
      mainimage:"https://images.unsplash.com/photo-1463062511209-f7aa591fa72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmRzY2FwZSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      profilepic:"https://images.unsplash.com/photo-1529911194209-8578109840df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      username:"Vani",
      caption:"Sorgam vaanillae :)",
      mainimage:"https://images.unsplash.com/photo-1662537889707-e6a8604dbb4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    }
  ]
  }
}

    handleAddpost =()=>{
        this.setState({
            showform:true,
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
        postdatas:[{profilepic:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",username:"tester",caption:newcaption,mainimage:newimage},...this.state.postdatas]
      })
    } 

  render() {
    return (
    <React.Fragment><div>
       { this.state.postdatas.map(
        (post)=>(<Post name={post.username} image={post.mainimage} caption={post.caption} profilepic={post.profilepic}></Post>)
        )
       }
       <button onClick={this.handleAddpost}>add post</button>
      </div>
      {
        this.state.showform &&
        (
            <div className="new-form" >
                <form>
                <div>
                <label>Newpost-comment:</label>
                  <input type="text" placeholder="enter caption" onChange={this.handlenewCaption}/>
                  </div>
                  <div className='new-imageupload'>
                  <label>NewImage:</label>
                  <input type="file" onChange={this.handlenewImage}></input>
                  </div>
                  <div>
                  <button type='submit' onClick={this.handlenewpost}>upload post</button>
                  </div>
                </form>
            </div>
        )
      
      }
      </React.Fragment>

    )
  }
}

export default Modal
