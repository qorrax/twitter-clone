
import React from 'react'

import {Navbar, Nav} from 'react-bootstrap'



const  Navigation = () => {
  return (
    <Navbar  bg="light" expand="lg" style={{padding: "30px"}}               >
    <Nav className='col-md-12 d-none d-md-block bg-light sidebar' activeKey="/home">
    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt='twitter-logo'
       width = '50px' height = '50px' />  
       <div className='sidebar-sticky'></div>


      
        <Nav.Item> <Nav.Link href="./">Home</Nav.Link> </Nav.Item>
        <Nav.Item> <Nav.Link href="./">Explore</Nav.Link> </Nav.Item>
        <Nav.Item> <Nav.Link href="./">Notifications</Nav.Link> </Nav.Item>
        <Nav.Item> <Nav.Link href="./">Home</Nav.Link> </Nav.Item>
        <Nav.Item> <Nav.Link href="./">Messeages</Nav.Link> </Nav.Item>
        <Nav.Item> <Nav.Link href="./">Bookarks</Nav.Link> </Nav.Item>
        <Nav.Item> <Nav.Link href="./">Profile</Nav.Link> </Nav.Item>

    </Nav>

    </Navbar>
 
 
  )
}



export default Navigation