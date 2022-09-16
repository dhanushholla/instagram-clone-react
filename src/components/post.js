import React, { Component } from "react";
import "./post.css";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let delcode=0
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
    super(props);

    this.state = {
      follow: false,
      comments: [],
      newcommentinput: "",
      liked: 0,
      saved: 0,
      showcomment: 0,
      deleteselection: this.props.deleteselect,

    };
  }
  componentWillUnmount() {
    // prevState.postdatas.length > this.state.postdatas.length + 1 &&
      if(delcode===2)
      {
       toast.success("post deleted", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
      }
      else if(delcode===1)
      {
      toast.success("post hidden", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
      else{
        toast.info("unexpected ", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
  }
  handlenewcommentInput = (e) => {
    this.setState({
      newcommentinput: e.target.value,
    });
  };

  handlenewcomment = () => {
    this.setState({
      comments: [...this.state.comments, this.state.newcommentinput],
      newcommentinput: "",
      showcomment: 1,
    });
  };

  handleFollow = () => {
    this.setState({ follow: !this.state.follow });
    this.state.follow
      ? toast.success("Following", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
      : toast.warning("unfollowed", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
  };
  handlelike = () => {
    if (this.state.liked <= 0) {
      this.setState({ liked: this.state.liked + 1 });
    } else {
      this.setState({ liked: 0 });
    }
  };
  handleshowcomment = () => {
    if (this.state.showcomment <= 0) {
      this.setState({ showcomment: this.state.showcomment + 1 });
    } else {
      this.setState({ showcomment: 0 });
    }
  };
  handlesave = () => {
    if (this.state.saved <= 0) {
      this.setState({ saved: this.state.saved + 1 });
    } else {
      this.setState({ saved: 0 });
    }
  };
  render(props) {
    console.log("post comp state:", this.state);
    // console.log("post comp props :", this.props);
    return (
      <div>
        <div class="postwrapper">
          <div class="posttopwrapper">
            <div class="namepicwrapper">
              <div>
                <img src={this.props.profilepic} alt="img here" />
              </div>
              <div>
                <p>
                  <strong>{this.props.name}</strong>
                </p>
              </div>
            </div>
            <ToastContainer />
            {this.props.loginname !== this.props.name ?
              (
                              this.state.follow ? 
                              (
                                    <div className="followwrapper">
                                       <button onClick={this.handleFollow}>
                                          <FaUserPlus />
                                        </button>
                                          {this.props.name !== this.props.loginname ? 
                                          (
                                            <button
                                              className="deletebtn"
                                              onClick={() => {
                                                this.setState({ deleteselection: 1 });
                                                delcode=1
                                                this.props.deletefn(this.props.index);
                                              }}
                                            >
                                              <FaEyeSlash />
                                            </button>
                                          ) : 
                                          (
                                            <button
                                              className="deletebtn"
                                              onClick={() => {
                                                this.setState({ deleteselection: 1 });
                                                delcode=2
                                                this.props.deletefn(this.props.index);
                                              }}
                                            >
                                              <FaRegTrashAlt />
                                            </button>
                                          )}
                                        </div>
                              )
                              :
                              (
                                <div className="followwrapper">
                                  <button onClick={this.handleFollow}>
                                    <FaUserMinus />
                                  </button>
                                  {this.props.name !== this.props.loginname ? 
                                  (
                                    <button
                                      className="deletebtn"
                                      onClick={() => {
                                        this.setState({ deleteselection: 1 });
                                        delcode=1
                                        this.props.deletefn(this.props.index);
                                      }}
                                    >
                                      <FaEyeSlash />
                                    </button>
                                  ) : 
                                  (
                                    <button
                                      className="deletebtn"
                                      onClick={() => {
                                        this.setState({ deleteselection: 1 });
                                        delcode=2
                                        this.props.deletefn(this.props.index);
                                      }}
                                    >
                                      <FaRegTrashAlt />
                                    </button>
                                  )}
                                </div>
                            )
              ):
              (
                <div className="followwrapper">
                  <button
                    className="deletebtn"
                    onClick={() => {
                      this.setState({ deleteselection: 1 });
                      delcode=2
                      this.props.deletefn(this.props.index);
                    }}
                  >
                    <FaRegTrashAlt />
                  </button>
              </div>
              )              
            }
          </div>
          {/* <div class="imagewrapper"> */}
          <img src={this.props.image} alt="image missing" />
          {/* </div> */}

          <div class="bottomwrapper">
            <div class="leftsideicons">
              {/* <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"  alt="loveicon"/> */}
              {/* {<FaRegHeart fill={this.state.likecount>0? "red":""}onClick={this.handlelike}></FaRegHeart>} */}
              {/* <FaHeart  onClick={this.handlelike}></FaHeart> */}
              <span onClick={this.handlelike}>
                {this.state.liked > 0 ? (
                  <FaHeart size="20" fill="red" />
                ) : (
                  <FaRegHeart size="20" />
                )}
              </span>

              {/* <img src="https://cdn-icons-png.flaticon.com/128/1947/1947247.png"  alt="commenticon"/> */}
              <FaRegComment
                size="20"
                fill={this.state.showcomment ? "blue" : ""}
                onClick={this.handleshowcomment}
              />
              {/* <img src="https://cdn-icons-png.flaticon.com/128/2099/2099085.png"  alt="shareicon"/> */}
              <FaRegPaperPlane size="20" />
            </div>
            <div class="rightsideicons" onClick={this.handlesave}>
              {/* <img src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png"  alt="saveicon"/>  */}
              {/* <BsBookmark backgroundColor={this.state.saved?"black":""}onClick={this.handlesave}/> */}
              {this.state.saved ? (
                <FaBookmark size="20" />
              ) : (
                <FaRegBookmark size="20" />
              )}
            </div>
          </div>
          {this.state.liked ? (
            <div className="liked-by">
              <img src={this.props.pp}></img>
              <pre> </pre>liked by {this.props.loginname}
            </div>
          ) : (
            ""
          )}
          <div className="footer">
            <div className="comments" id="comments">
              <strong>{this.props.name}</strong>
              <pre> </pre>
              {this.props.caption}
            </div>
            <div className="comment-updater">
              {this.state.showcomment
                ? this.state.comments &&
                  this.state.comments.map((comment) => {
                    return (
                      <div className="eachcomment">
                        <span className="commentpicwrapper">
                          <img src={this.props.pp}></img> {this.props.loginname}{" "}
                          : {comment}
                        </span>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          {this.state.showcomment ? (
            <div class="comment-wrapper">
              <div class="addcommentwrapper">
                {" "}
                <input
                  type="text"
                  id="new-comment"
                  placeholder="add comments!"
                  value={this.state.newcommentinput}
                  onChange={this.handlenewcommentInput}
                ></input>
              </div>
              <button class="addcomment" onClick={this.handlenewcomment}>
                post
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Post;
