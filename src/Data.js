import Table from 'react-bootstrap/Table';
import React,{useEffect, useState} from 'react';

function Data() {
    const [data,setData] = useState([])

 

       useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((json) => {
            setData(json);
          });
      }, []);
  return (
    <div>
    <h1>Users Table Task</h1>
    <Table  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>   
      
        </tr>
        { 
      data.map((fun,id) =>
      <tr key={id}>
        <th>{fun.id}</th>
        <th>{fun.name}</th>
        <th>{fun.username}</th>
        <th>{fun.email}</th>
        <th>{fun.phone}</th>
        <th>{fun.website}</th>
             </tr>
    
      )
    }

    
      </thead>
      <tbody>
      
      </tbody>
    </Table>
    </div>
  );
}


export default Data;