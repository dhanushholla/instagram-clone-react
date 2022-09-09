import React, { Component } from 'react';
import './post.css'
class Post extends Component {
  // handlenewcomment=()=>{
  //   let data=document.getElementById("new-comment").value;
  //   let comments=document.getElementById("comments");
  //   let newdata=document.createElement("div");
  //   newdata.innerText=data;
  //   comments.appendChild(newdata);
  //   document.getElementById("new-comment").value="";
  // }
  constructor(props) {
    super(props)
  
    this.state = {
       follow:false,
       comments:[],
       newcommentinput:""

    }
  }
  handlenewcommentInput=(e)=>{
    
    this.setState({
      newcommentinput:e.target.value
    })
  }
  
  handlenewcomment=()=>{
    this.setState({
      comments:[...this.state.comments, this.state.newcommentinput],
      newcommentinput:""
    })
    
  }
 
  handleFollow=()=>{
    this.setState({follow:!this.state.follow})
  }
  render(props) {
    console.log(this.state)

    return (
      <div>
            <div class="postwrapper">
             <div class="posttopwrapper">
            <div class="namepicwrapper">
                <div><img src={this.props.profilepic}alt="img here"/></div>
                <div><p>{this.props.name}</p></div>
            </div>
              { this.state.follow?
                <div class="followwrapper"><button onClick={this.handleFollow}>Unfollow</button></div>:<div class="followwrapper"><button onClick={this.handleFollow}>follow</button></div>
              }
        </div>
        <div class="imagewrapper">
          <img src={this.props.image}  alt="post pic here"/></div>
        <div class="bottomwrapper">   
            <div class="leftsideicons">
            <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"  alt="loveicon"/>
            <img src="https://cdn-icons-png.flaticon.com/128/1947/1947247.png"  alt="commenticon"/>
            <img src="https://cdn-icons-png.flaticon.com/128/2099/2099085.png"  alt="shareicon"/>
            </div> 
            <div class="rightsideicons">
            <img src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png"  alt="saveicon"/> 
            </div>
            </div>
    <div className="comments" id="comments">{this.props.caption}</div>
    <div className='comment-updater'>
    {
      this.state.comments &&
      this.state.comments.map((comment)=>{
         return (<div>commentername:{comment}</div>)
      })
    }
    </div>
    
    <div class="comment-wrapper">
        <div class="addcommentwrapper"> <input type="text" id="new-comment"placeholder="add comments!" value={this.state.newcommentinput} onChange={this.handlenewcommentInput}></input></div>
        <button class="addcomment" onClick={this.handlenewcomment}>Add Comment</button>
    </div>
    </div>        
    </div>
    )
  }
}

export default Post
