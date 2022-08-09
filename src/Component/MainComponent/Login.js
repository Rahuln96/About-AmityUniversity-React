import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="signup text-white">
  <div className="row">
    <div className="col-4" />
    <div className="col-4 signformbg">
      <h2>Login Here</h2>
      <form>

  <div className="mb-3 mt-4">
   
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp" placeholder='Enter your Email'
    />
   
  </div>
  <div className="mb-3">
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1" placeholder='Password'
    />
  </div>
  
 
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

      <br />
      <p style={{ color: "white" }}>
        Not have an account?<a href="/Signup" className='text-info'>Signup</a>
      </p>
      <br />
    </div>
    <div className="col-4" />
  </div>
</div>

    </div>
  )
}

export default Login
