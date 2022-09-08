import React, { Component } from 'react';
import './post.css'
class Post extends Component {
  // handlenewcomment=()=>{
  //   let data=document.getElementById("new-comment").value;
  //   let comments=document.getElementById("comments");
  //   let newdata=document.createElement("div");
  //   newdata.innerText=data;
  //   comments.appendChild(newdata);
  // }
  render(props) {
    return (
      <div>
            <div class="postwrapper">
             <div class="posttopwrapper">
            <div class="namepicwrapper">
                <div><img src={this.props.profilepic}alt="img here"/></div>
                <div><p>{this.props.name}</p></div>
            </div>
            <div class="followwrapper"><button >Follow</button></div>
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
    <div class="comments" id="comments">{this.props.caption}</div>
    <div class="comment-wrapper">
        <div class="addcommentwrapper"> <textarea id="new-comment"placeholder="add comments!"></textarea></div>
        <button class="addcomment" onClick={this.handlenewcomment}>Add Comment</button>
    </div>
    </div>        
    </div>
    )
  }
}

export default Post
