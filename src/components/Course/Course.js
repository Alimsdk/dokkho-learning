import React from 'react';
import { useHistory } from 'react-router';

const Course = (props) => {
    const {img,title,description,fee,topic,tutor}=props.course;
    const history=useHistory();
    const viewMore=()=>{
      history.push('/services');
    }
    return (
        <div className="card" style={{width: "22rem",marginTop:'45px'}}>
        <img style={{height:'300px'}} src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.slice(0,120)}...</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Topic : {topic}</li>
          <li className="list-group-item">Tutor : {tutor}</li>
          <li className="list-group-item">Course Fee : {fee} </li>
        </ul>
        <div className="d-flex justify-content-around">
            <button onClick={viewMore} className="btn btn-primary">view more..</button>
            <button className="btn btn-primary">Buy Now</button>
             
          

        </div>
        
      </div>
    );
};

export default Course;