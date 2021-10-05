import React from 'react';

const Form = () => {
    return (
        <div className="mt-5">
            <form class="row g-3 container">
  <div class="col-md-6">
    <label for="inputName" class="form-label">FullName</label>
    <input type="text" class="form-control" id="inputName"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>

 
  <div class="col-12">
    <div class="form-check" style={{textAlign:'left'}} >
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label " for="gridCheck" >
       I accept all terms and conditions!
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Register</button>
  </div>
</form>
        </div>
    );
};

export default Form;