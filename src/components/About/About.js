import React from 'react';

const About = () => {
    return (
        <div className="mt-3">
            <h2>About Us</h2>
            <br />
            <div className="d-flex justify-content-around align-items-center">
                <div>
                    <h3>Dokkho Is a Online Platform for personal Developement</h3> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia sunt suscipit dolore illum cum eius voluptatem tenetur magnam qui nemo quod, fuga, laboriosam et? Amet, eveniet ducimus? Voluptatibus, quos.</p>
                </div>
                <div>
                    <img style={{width:'500px'}} src="https://irp-cdn.multiscreensite.com/8c72458e/dms3rep/multi/undraw_code_review_l1q9+%281%29.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;