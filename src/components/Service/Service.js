import React from 'react';

const Service = (props) => {
    console.log(props);
    const {img,title,description,fee,topic,tutor}=props.service;
    return (
        <div class="card mt-5" style={{width: "18rem"}}>
        <img src={img} class="card-img-top" alt="..." style={{height:'300px'}}/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{topic}</li>
          <li class="list-group-item">{tutor}</li>
          <li class="list-group-item">{fee}</li>
        </ul>
        <div className="body">
            <button className="w-100 btn btn-warning">Buy Now</button>
          
        </div>
  
      </div>
    
    );
};

export default Service;