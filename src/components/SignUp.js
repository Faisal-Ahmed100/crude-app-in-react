import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='tops tops2'>

    <div className="container">
    <form className='box shadow' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">UseName</label>
        <input type="text" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Phone</label>
        <input type="number" name='number' className="form-control" id="exampleInputPassword1" />
      </div>
     
    
      <button type="submit" className="btn btn-primary">Submit</button>
      <p className='mt-5'>All ready have an account? <Link to='/newuser'>SignIn</Link></p>
    </form>
    </div>
    
        </div>
  )
}

export default SignUp