

import React from 'react'
import { 
    Card,
    ListGroup,
    InputGroup,
    Form,
    Button
     } from 'react-bootstrap'


function Trending() {
  return (
     <div styl={{padding: "30px"}}>
        <InputGroup className="mb-3">
            <Form.Control 
            placeholder="Search Twitter"
            aria-label="Search Twitter"
            aria-describedby="basic-addon2"
            />
            <button variant="outline-secondary" id="button-addon2">
                Search
            </button>
        </InputGroup>



    <Card>
        <Card.Body>
            <Card.Title> what's Trending</Card.Title>
            <ListGroup style={{border:"none", fontWeight: "bold"}}>
                <ListGroup.Item style={{border:"none"}}>Cars justo odio </ListGroup.Item>
                <ListGroup.Item style={{border:"none"}}>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item style={{border:"none"}}>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item style={{border:"none"}}>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item style={{border:"none"}}>Vestibulum at eros</ListGroup.Item>


            </ListGroup>



        </Card.Body>


    </Card>

    </div>
  )
}

export default Trending