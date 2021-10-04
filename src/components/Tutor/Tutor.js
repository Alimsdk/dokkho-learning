import React from 'react';

const Tutor = () => {
    return (
        <div className="d-flex justify-content-around align-items-center">
            <div>
               <h2>Teach On Dokkho!</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tenetur illum aliquam! Ex, eos delectus pariatur illo quasi earum quae.</p>
             <br />  <h4>Why Teach on Dokkho?</h4>
                <p>Make lesson videos upload it on Dokkho Learning platform !! Whenever a student buys your course you will get 90% of the revenue + all support by our team !!</p>
          <button className="btn btn-danger">Join Now</button>
            </div>
            <div>
                <img src="https://vitutors.com/wp-content/themes/vitutors/images/svg/tutor-student.svg" alt="" />
                
            </div>
        </div>
    );
};

export default Tutor;