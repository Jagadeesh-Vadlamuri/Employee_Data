import { textAlign } from '@mui/system'
import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div style={{textAlign: 'center'}}>
        <Link to="/getDetails"  ><button className='btn btn-dark' >Employee Details</button></Link>
        
        </div>
        <br/>
        
        <h1 style={{textAlign: "center"}}>Welcome to the Employee Registry</h1>
        <br/>
        <br/>
        <h2 style={{textAlign: "center"}}>Click on <span style={{border: "1px solid black", borderRadius: "10px", backgroundColor:"black", color: "white", padding: '4px'}}>Create User</span> button on the navbar to create a new employee</h2>
        <br/>
        <br/>
        <h2 style={{textAlign: "center"}}>Click on <span style={{border: "1px solid black", borderRadius: "10px", backgroundColor:"black", color: "white", padding: '4px'}}>Employee Details</span> button above to view all the employee data</h2>
    </div>
  )
}

export default Home