import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate,useParams } from 'react-router-dom';

const EditUsers = () => {
  let navigate=useNavigate();
  let {id}=useParams();
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
   await axios.put(`http://localhost:3001/users/${id}`,user);
   navigate("/");
 
  };
useEffect(()=>{
    loadUsers();
},[]);
  const loadUsers=async ()=>{
      const result=await axios.get(`http://localhost:3001/users/${id}`);
      setUser(result.data);
  }
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
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              required
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
              required
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>onChangeSubmit(e)}
              name="username"
              value={username}
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
              required
              onChange={(e)=>onChangeSubmit(e)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              required
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>onChangeSubmit(e)}
              value={phone}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              WebSite
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="exampleInputPassword1"
              name="website"
              onChange={(e)=>onChangeSubmit(e)}
              value={website}
            />
          </div>

          <div className="d-inline-block widths">
            <button type="submit" className="btn btn-primary widths">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUsers;
