
import React from 'react'

import {Navbar , Nav} from 'react-bootstrap'

const  Navigation = () => {
  return (
    <Navbar className='left' bg="light" expand="lg">
    <Nav className='col-md-12  d-none d-md-block bg-light sidebar' activeKey="/home">
    <img src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png" alt='twitter-logo'
       width = '50px' height = '50px'
       
       />   

      
      <Nav.Item> <Nav.Link href="./">Home</Nav.Link> </Nav.Item>
        <Nav.Item> <Nav.Link href="./">Profile</Nav.Link> </Nav.Item>
        <Nav.Item> <Nav.Link href="./">Notifications</Nav.Link> </Nav.Item>
        <Nav.Item> <Nav.Link href="./">Messages</Nav.Link> </Nav.Item>

    </Nav>

    </Navbar>
 
 
  )
}


export default Navigation