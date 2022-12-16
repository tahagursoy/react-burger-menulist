import React from 'react'
import menuler from './yemekdata'
import { Col, Container, Row } from 'react-bootstrap'
import Menulist from '../components/menulist'

const Food = () => {

    


  return (
        <>
        <Container>
            <Row>
                {
                    menuler.map((menu,index)=>(
                        <Col md={4} key={index} >
                            <Menulist menus={menu} />
                        </Col>
                    ))
                 }
                
            </Row>
        </Container>

        </>
  )
}

export default Food