import React, { Component } from "react";
import "./post.css";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let delcode = 0;
class Post extends Component {
  // handlenewcomment=()=>{
  //   let data=document.getElementById("new-comment").value;
  //   let comments=document.getElementById("comments");
  //   let newdata=document.createElement("div");
  //   newdata.innerText=data;
  //   comments.appendChild(newdata);
  //   document.getElementById("new-comment").value="";
  // }
  // listRef = null;
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

  setListRef = (ref) => {
    this.listRef = ref;
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    // const list = this.listRef.current;
    // console.log(list);
    // if (prevState.comments.length < this.state.comments.length) {
    //   console.log("hitted getsnapshit updation in post.js");
    //   return list.scrollHeight - list.scrollTop;
    // }
    // return null;

    if (prevState.comments.length < this.state.comments.length) {
      console.log(
        "from getsnapshot",
        "scrolltop:",
        this.listRef.scrollTop,
        "scrollheight:",
        this.listRef.scrollHeight
      );
      return this.listRef.scrollHeight - this.listRef.scrollTop + 40 ;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // const list = this.listRef.current;
    // if (snapshot !== null) {
    //   console.log("snapshot:", snapshot);
    //   list.scrollTop = list.scrollHeight - snapshot;
    //   console.log(
    //     "scrolltop:",
    //     list.scrollTop,
    //     "scrollheight:",
    //     list.scrollHeight
    //   );

    if (snapshot !== null) {
      console.log(
        "scrolltop:",
        this.listRef.scrollTop,
        "scrollheight:",
        this.listRef.scrollHeight,
        "snapshot:",
        snapshot
      );
      this.listRef.scrollTop = this.listRef.scrollHeight - snapshot ;
    }
  }

  componentWillUnmount() {
    if (delcode === 2) {
      toast.success("post deleted", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else if (delcode === 1) {
      toast.success("post hidden", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
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
    if (this.state.newcommentinput !== "") {
      //to prevent empty comment addition
      this.setState({
        comments: [...this.state.comments, this.state.newcommentinput],
        newcommentinput: "",
        showcomment: 1,
      });
    }
  };
  handlenewcomment1=()=>{
    if (this.state.newcommentinput !== "") {
      //to prevent empty comment addition
      this.setState({
        comments: [...this.state.comments, this.state.newcommentinput],
        newcommentinput: "",
        showcomment: 1,
      });
    } 
  }

  handleFollow = () => {
    this.setState({ follow: !this.state.follow });
    this.state.follow
      ?toast.success("Following", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
      :toast.warning("unfollowed", {
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
    // console.log("post comp state:", this.state);
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
            {this.props.loginname !== this.props.name ? (
              this.state.follow ? (
                <div className="followwrapper">
                  <button onClick={this.handleFollow}>
                    <FaUserPlus />
                  </button>
                  {this.props.name !== this.props.loginname ? (
                    <button
                      className="deletebtn"
                      onClick={() => {
                        this.setState({ deleteselection: 1 });
                        delcode = 1;
                        this.props.deletefn(this.props.index);
                      }}
                    >
                      <FaEyeSlash />
                    </button>
                  ) : (
                    <button
                      className="deletebtn"
                      onClick={() => {
                        this.setState({ deleteselection: 1 });
                        delcode = 2;
                        this.props.deletefn(this.props.index);
                      }}
                    >
                      <FaRegTrashAlt />
                    </button>
                  )}
                </div>
              ) : (
                <div className="followwrapper">
                  <button onClick={this.handleFollow}>
                    <FaUserMinus />
                  </button>
                  {this.props.name !== this.props.loginname ? (
                    <button
                      className="deletebtn"
                      onClick={() => {
                        this.setState({ deleteselection: 1 });
                        delcode = 1;
                        this.props.deletefn(this.props.index);
                      }}
                    >
                      <FaEyeSlash />
                    </button>
                  ) : (
                    <button
                      className="deletebtn"
                      onClick={() => {
                        this.setState({ deleteselection: 1 });
                        delcode = 2;
                        this.props.deletefn(this.props.index);
                      }}
                    >
                      <FaRegTrashAlt />
                    </button>
                  )}
                </div>
              )
            ) : (
              <div className="followwrapper">
                <button
                  className="deletebtn"
                  onClick={() => {
                    this.setState({ deleteselection: 1 });
                    delcode = 2;
                    this.props.deletefn(this.props.index);
                  }}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            )}
          </div>
          {/* <div class="imagewrapper"> */}
        {this.props.mediatype.includes("image")&&<img src={this.props.image} alt="pic missing" />}
        {this.props.mediatype.includes("video")&&<video src={this.props.image} alt="video missing"  controls/> }
        {this.props.mediatype.includes("audio")&& <audio src={this.props.image} alt="audio missing" controls/>  }
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
            <div className="comment-updater" ref={this.setListRef}>
              {this.state.showcomment
                ? this.state.comments &&
                  this.state.comments.map((comment) => {
                    return (
                      <div className="eachcomment">
                        <span className="commentpicwrapper">
                          {/* <span className="commentpicwrapper"> */}
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
                  onKeyDown={(e)=>{
                    if(e.key==="Enter"){this.handlenewcomment1(e)}
                  }}
                ></input>
              </div>
              <button class="addcomment" onClick={this.handlenewcomment} >
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
