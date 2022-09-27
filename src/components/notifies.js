import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Avatar, Button, List, Skeleton } from "antd";
import { FaHome, FaRegHeart, FaSearch } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import './notifies.css'

const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const Notifies = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

        window.dispatchEvent(new Event("resize"));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: '100%',
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <React.Fragment>
      <nav className="navbar">
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          alt="logo"
        ></img>
        <Link to="/" className="Linkcls">
          <button className="logoutbtn">Logout</button>
        </Link>
      </nav>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">follow</a>,
              <a key="list-loadmore-more">hide</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="liked your recent story & posts"
              />
            </Skeleton>
          </List.Item>
        )}
      />
      <nav className="footer-navbar">
        <Link to="/feed">
          <FaHome size="1.5rem"></FaHome>
        </Link>
       <Link to="/imgs"> <FaSearch size="1.5rem"></FaSearch></Link>
        <BiMoviePlay size="1.5rem"></BiMoviePlay>
        <Link to="/notifies" color="black">
          <FaRegHeart size="1.5rem"></FaRegHeart>
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default Notifies;
