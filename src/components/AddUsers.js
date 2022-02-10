import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from 'react-router-dom';

const AddUsers = () => {
  let navigate=useNavigate();
const [user,setUser]=useState({
  name:'',
  username:'',
  email:'',
  phone:'',
  website:'',

});
const {name,username,email,phone,website}=user;
const onChangeSubmit=(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
}
  const handleSubmit = async (e) => {
    e.preventDefault();
   await axios.post('http://localhost:3001/users',user);
   navigate("/");
  };
  return (
    <div className="tops">
      <div className="container">
        <form className="box shadow" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={name}
              onChange={(e)=>onChangeSubmit(e)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              UseName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>onChangeSubmit(e)}
              name="username"
              value={username}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              name="email"
              onChange={(e)=>onChangeSubmit(e)}
              value={email}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>onChangeSubmit(e)}
              value={phone}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              WebSite
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="website"
              onChange={(e)=>onChangeSubmit(e)}
              value={website}
              required
            />
          </div>

          <div className="d-inline-block widths">
            <button type="submit" className="btn btn-primary widths">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
