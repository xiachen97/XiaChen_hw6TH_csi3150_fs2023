import React from 'react';
import './travelblog.css';

const TravelBlog = (props) => {
  //deconstruct my props obj.
  return (
    <div className="travel-blog-container">
      <br></br>
      <h1>{props.placeHeading}</h1>
      <div className="travel-blog-image">
        <img src={props.placeImg1} className='blog-image1' alt={`${props.placeHeading}`}></img>
        <img src={props.placeImg2} className='blog-image2' alt={`${props.placeHeading}`}></img>
        <img src={props.placeImg3} className='blog-image3' alt={`${props.placeHeading}`}></img>
      </div>
      <p>{props.placeDescription}</p>
    </div>
  );
};

export default TravelBlog;
