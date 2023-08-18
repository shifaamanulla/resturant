import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ViewAll from './ViewAll';


function Home() {
    //sate to hold datas
    const [resturants,setResturant]=useState([])
//api to get access all resturant data
const fetchResusturant=async()=>{
    var result=await fetch('/db.json')
    result.json().then(data=>setResturant(data.restaurants))
}
console.log(resturants);
useEffect(()=>{
    fetchResusturant()
},[])

  return (
    <div>
        
        <Container>
      <Row>
        <Col><ViewAll data={resturants}></ViewAll></Col>
      </Row>
    </Container>
        
    
      
    </div>
  )
}

export default Home