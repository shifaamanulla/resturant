
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import OperatingTime from './OperatingTime';
import Review from './Review';





function View() {
  const [allRest,setRest]=useState([])
  const params=useParams()
  const getRest=async(uid)=>{
  const result= await fetch(`/db.json`)
  result.json().then(data=>{
     setRest(data.restaurants);
  })
  } 
  

  useEffect(()=>{
    getRest(params.id)
        //  console.log(params.id);
  },[])
  const singleRest=allRest.find(i=>i.id==params.id)

  console.log(singleRest);

  return (
    <div> 
       <div className=''>
      {
        singleRest?
        <div>
           <Row className='w-100 mt-3 '>
        <Col lg={6} md={12} sm={12} xl={6}>
           <img className='w-100 p-5 mt-5 g'  style={{height:'800px'}}
           src={singleRest.photograph} alt="" rounded />
        </Col>
        <Col lg={6} md={12} sm={12} xl={6} className='mt-5 ' >
            <h1 className='mt-5 bg-light text-warning p-3 d'>{singleRest.name}</h1>
            <ListGroup className='fs-4 mt-3' >
        <ListGroup.Item id='d' className='p-4 mt-2 ms-0 d g'>Neighbourhood:<strong className='text-warning'>{singleRest.neighborhood}</strong></ListGroup.Item>
        <ListGroup.Item id='d' className='p-4 mt-2 d g'>Address:<strong className='text-warning'>{singleRest.address}</strong></ListGroup.Item>
        <ListGroup.Item id='d' className='p-4 mt-2 d g'>Cuisine_type:<strong className='text-warning'>{singleRest.cuisine_type}</strong></ListGroup.Item>
        <ListGroup.Item id='d' className='p-4 mt-2 d g'>
          <strong > <OperatingTime timeData={singleRest.operating_hours}></OperatingTime></strong> 
        </ListGroup.Item>

      
        <ListGroup.Item id='d' className='p-4 mt-2'>
                 <Review reviews={singleRest.reviews}></Review>
        </ListGroup.Item>


      </ListGroup>

        </Col>

      </Row>
        </div>
        : <h1>No deatails found</h1>
      }
        
    </div>



    </div>
  )
}

export default View