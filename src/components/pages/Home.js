import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);
  
  const loadUsers=async ()=>{
    const res=await axios.get('http://localhost:3001/users');
    setUsers(res.data.reverse());
  }
  const deleteBtn=async (id)=>{
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  }
  return (
    <div className='tops'>
      <div className="container">
      <table className="table shadow border ">
  <thead>
    <tr className='table-dark'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UseName</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website Link</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((items,index)=>{
        return(
          <>
          <tr key={items.id}>
            <th scope='row'>{index+1}</th>
            <td>{items.name}</td>
            <td>{items.username}</td>
            <td>{items.email}</td>
            <td>{items.phone}</td>
            <td>
              <a href={items.website} target='_blank'>{items.website}</a>
            </td>
            <td>
              <Link className='btn btn-outline-primary' to={`/veiw/${items.id}`}>View</Link>
              <Link className='btn btn-outline-secondary mx-2' to={`/edit/${items.id}`}>Edit</Link>
              <button className='btn btn-danger' onClick={()=>deleteBtn(items.id) }>Delete</button>
            </td>
          </tr>
          </>
        )
      })
    }
   
  </tbody>
</table>
<div className="mx-right d-flex justify-content-end">
  <Link to='/addusers' className='btn btn-dark'>Add User</Link>
</div>
      </div>

   
    </div>
  )
}

export default Home