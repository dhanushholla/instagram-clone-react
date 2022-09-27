/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import Post from "./post";
import "./Mainpage.css";
import { Link } from "react-router-dom";
import { FaHome, FaRegHeart, FaSearch } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import demovideo from "../assests/dummyvideo.mp4"
import demoaudio from "../assests/electronic-future-beats-117997.mp3"
let newcaption = "",
  newimage = [],
  newcomment = [""];
let mediatype = [];
class Mainpage extends Component {
  constructor(props) {
    super(props);
    // console.log("main page constructor")
    this.state = {
      showform: false,
      theme: "light",
      filter:"none",
      postdatas: [
        {
          profilepic:
            "https://media.istockphoto.com/photos/nothing-is-a-magnet-for-success-like-self-confidence-picture-id1262964459?b=1&k=20&m=1262964459&s=170667a&w=0&h=ksXAqZ43oZWWm9Zdz_4IMLHGCpS9_yR5Tc4zCex2-Ao=",
          username: "Hari",
          caption:
            "Carousel feed",
          mainimage:
            [demovideo,"https://c.tenor.com/q-t915cdRRwAAAAM/memes-vadivelu.gif",demoaudio],
          delselect: 0,
          mediatype: ["video","image","audio"],
        },
        {
          profilepic:
            "https://images.unsplash.com/photo-1529911194209-8578109840df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          username: "Vani",
          caption: "thala vazhlikuthu da thala valikudhae",
          mainimage:
            ["https://c.tenor.com/MuhlnnRpq2wAAAAM/vadivelu-thalavalikudu-da.gif"],
          delselect: 0,
          mediatype: ["image"],
        },
        {
          profilepic:
            "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          username: "Holla",
          caption: "How do i tell u 😂",
          mainimage:
            ["https://c.tenor.com/_Hj95ZMsq8cAAAAC/how-do-i-tell-you-vadivelu.gif"],
          delselect: 0,
          mediatype: ["image"],
        },
        {
          profilepic:
            "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          username: "Anu",
          caption:
            "inimae instagram na indha design dhaana da nyabagam varum deii 😂🤣",
          mainimage:
            ["https://c.tenor.com/a98TfgzHHc8AAAAM/vadivelu-singamuthu.gif"],
          delselect: 0,
          mediatype: ["image"],
        },
       
      ],
    };
  }

  filterhandle=(e)=>{
    this.setState({filter:e.target.value})

  }

  themehandle = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  };

  handleAddpost = () => {
    this.setState({
      showform: true,
    });
  };
  handleClosepost = (e) => {
    this.setState({
      showform: false,
    });
  };
  handlenewCaption = (e) => {
    newcaption = e.target.value;
  };
  handlenewImage = (e) => {
    for(let i=0;i<e.target.files.length;i++)
    {
       mediatype[i] = e.target.files[i].type;
       console.log("mediatype in mainpage");
       newimage[i] = URL.createObjectURL(e.target.files[i]);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps - mainpage - druing post add:",prevProps);
    // console.log("prevState - mainpage - druing post add::",prevState);
    // console.log("CurrentState - mainpage - druing post add::",this.state);
    // console.log("CurrentProps - mainpage - druing post add::",this.props);
    {
      prevState.postdatas.length < this.state.postdatas.length &&
        toast.success("new-post added!", {
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

  deletethepost = (i) => {
    const arr = this.state.postdatas.filter((data, index) => {
      return i !== index;
    });
    // console.log("New array:", arr);
    this.setState({ postdatas: arr });
  };
  handlenewpost = (e) => {
    e.preventDefault();
    // console.log("state is changed");
    this.setState({
      // postdatas:[{profilepic:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",username:"tester",caption:newcaption,mainimage:newimage,comments:newcomment},...this.state.postdatas,],
      postdatas: [
        ...this.state.postdatas,
        {
          // profilepic:
          //   "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          profilepic: this.props.profile,
          username: this.props.loginname,
          caption: newcaption,
          mainimage: newimage,
          comments: newcomment,
          delselect: 0,
          mediatype: mediatype,
        },
      ],
      showform: false,
    });
    newimage = [];
    newcaption = "";
    newcomment = "";
     mediatype = [];
    // window.scrollTo(0, 0);
  };
  render() {
    // console.log("postdatas value in mainpage state",this.state.postdatas)
    return (
      <React.Fragment>
        <div className="result">
          <nav className="navbar">
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
              alt="logo"
            ></img>
            <button onClick={this.handleAddpost} className="addpostbtn">
              add post
            </button>
            
            <input type="text" placeholder="want to highlight: image|video|audio" onChange={this.filterhandle} className="filterer" maxLength="5" ></input> 
            <span className="themetoggle">
              {this.state.theme==='light'?
              <button onClick={this.themehandle}>
               press to<BsMoonStars />
              </button>:
              <button onClick={this.themehandle}>
              press to<BsSun /> 
              </button>
               }
            </span>
            <Link to="/" className="Linkcls"> 
              <button className="logoutbtn">Logout</button>
            </Link>
          </nav>
          {this.state.showform && (
            <div className="new-form">
              <form>
                <div>
                  <label>Newpost-Caption:</label>
                  <input
                    type="text"
                    placeholder="enter caption"
                    onChange={this.handlenewCaption}
                    autoFocus
                    required
                  />
                </div>
                <div className="new-imageupload">
                  <label>new-Image/video/audio:</label>
                  <input
                    type="file"
                    onChange={this.handlenewImage}
                    accept="image/*,video/*,audio/*"
                    multiple
                    required
                  ></input>
                </div>
                <div>
                  <button type="submit" onClick={this.handlenewpost}>
                    upload post
                  </button>
                  <button onClick={this.handleClosepost}>close form</button>
                </div>
              </form>
            </div>
          )}
          <div className="feedposts">
            {this.state.postdatas.map((post, index) => (
              <Post
                name={post.username}
                image={post.mainimage}
                caption={post.caption}
                profilepic={post.profilepic}
                loginname={this.props.loginname}
                pp={this.props.profile}
                deleteselect={post.delselect}
                deletefn={this.deletethepost}
                index={index}
                mediatype={post.mediatype}
                theme={this.state.theme}
                filterinput={this.state.filter}
              ></Post>
            ))}
          </div>
          <ToastContainer />
          <nav className="footer-navbar">
            <FaHome size="1.5rem"></FaHome>
            <FaSearch size="1.5rem"></FaSearch>
            <BiMoviePlay size="1.5rem"></BiMoviePlay>
            <FaRegHeart size="1.5rem"></FaRegHeart>
            <img
              src={this.props.profile}
              className="navbar-profile"
              alt="footer-loginpic"
            ></img>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Mainpage;
