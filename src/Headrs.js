import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import ViewAll from './ViewAll';

function Headrs() {
  return (
    <div> <Navbar className="bg-warning">
    <Container>
      <Link to={''} style={{ textDecoration: 'none' }}>
      <Navbar.Brand className='text-white fs-4' style={{fontWeight:'500px'}}>   
      <i class="fa-solid fa-utensils fa-beat-fade" style={{color:'#e4e7ec'}}></i>
Choose Best</Navbar.Brand>

      </Link>
    </Container>
    
  </Navbar></div>

  )
}

export default Headrs