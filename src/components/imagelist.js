import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FaHome, FaRegHeart, FaSearch } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import {Link} from 'react-router-dom'


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
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
    <span style={{width:'90%'}}><i class='fa fa-search'></i><input type="search" id="site-search" name="q" style={{borderRadius:10,width:'50%',margin:'20px'} }></input></span> 
    
    <ImageList
      sx={{ width: '50%' , height: '80%' }}
      variant="quilted"
      cols={3}
      rowHeight={120}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
        <nav className='footer-navbar'> 
        <Link to="/feed"><FaHome size="1.5rem"></FaHome></Link>
        <FaSearch size="1.5rem"></FaSearch>
        <BiMoviePlay size="1.5rem"></BiMoviePlay>
        <Link to="/notifies" color="black"><FaRegHeart size="1.5rem"></FaRegHeart></Link> 
        </nav>   
    </React.Fragment>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://c.tenor.com/69_4HsLFbVgAAAAM/ajith-thala.gif',
    title: 'ajith',
    rows:2
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://c.tenor.com/9tQFSye7E5AAAAAM/enough-gp-muthu.gif',
    title: 'GP muthu',
    cols: 3,
    rows:4
  },
  {
    img: 'https://c.tenor.com/IE32otgxKYcAAAAM/vijayakanth-anger-angry.gif',
    title: 'vijayakanth',
    cols: 2,
    rows:4
  },
  {
    img: 'https://c.tenor.com/wZDutxPppGEAAAAM/funny-look-vikram.gif',
    title: 'vikram',
    cols: 1,
    rows:4
  },
  
];
