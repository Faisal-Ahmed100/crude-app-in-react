import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Params, useParams } from 'react-router-dom';

const VeiwUsers = () => {
let {id}=useParams();
    const [user,setUser]=useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:'' 
       });
       useEffect(()=>{
           loadUsers();
       },[])
       const loadUsers=async()=>{
        const res= await axios.get(`http://localhost:3001/users/${id}`);
           setUser(res.data);
       }
  return (
    <div className='tops'>

<div className="container">
    <h2>user id : {id}</h2>
    <div className="">
        <ul className='list-group w-50'>
            <li className="list-group-item">Name : {user.name}</li>
            <li className="list-group-item">Name : {user.username}</li>
            <li className="list-group-item">Name : {user.email}</li>
            <li className="list-group-item">Name : {user.phone}</li>
            <li className="list-group-item">Name : <a href={user.website} target="_blank">{user.website}</a></li>
        </ul>
    </div>
</div>
    </div>
  )
}

export default VeiwUsers