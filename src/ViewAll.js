import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './viewall.css';
import { Link } from 'react-router-dom';


function ViewAll({ data }) {

  return (
    <div>
      <Container>
        <Row>
          {
            data.map(i => (
                <Col xs={12} sm={6} md={4} lg={4} xl={4}>
              <Link to={`singleView/${i.id}`} style={{ textDecoration: 'none' }}>

                  <Card style={{ width: '100%' }} className='mt-5 mb-3 d'>
                    <Card.Img variant="top" src={i.photograph} style={{ height: '400px' }} />
                    <Card.Body>
                      <Card.Title>{i.name}</Card.Title>
                      <Card.Text>
                        {i.address}
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Link>
          </Col>

        )
        )
            }

      </Row>

    </Container>
     
        
    </div >
  )
}

export default ViewAll