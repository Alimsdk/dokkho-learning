import React from 'react';

const Course = (props) => {
    const {img,title,description,fee,topic,tutor}=props.course;
    return (
        <div class="card" style={{width: "22rem",marginTop:'45px'}}>
        <img style={{height:'300px'}} src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description.slice(0,120)}...</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Topic : {topic}</li>
          <li class="list-group-item">Tutor : {tutor}</li>
          <li class="list-group-item">Course Fee : {fee} </li>
        </ul>
        <div className="d-flex justify-content-around">
            <button  className="btn btn-primary">view more..</button>
            <button className="btn btn-primary">Buy Now</button>
        </div>
        
      </div>
    );
};

export default Course;