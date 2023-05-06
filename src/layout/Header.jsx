
import React from "react";
import Navbar from "react-bootstrap/Navbar";


import { Row, Col } from "react-bootstrap";

const Header = ({ passLoginDetails }) => {

    localStorage.setItem('userDetails', JSON.stringify(passLoginDetails));

    const val = localStorage.getItem('userDetails');
    console.log(val)
    return (
        <Navbar bg="warning" className="fixed-top">
            <Row>
                <Col>
                    <Navbar.Brand> Welcome to Courses {JSON.stringify(passLoginDetails)}</Navbar.Brand>
                </Col>
                <Col>
                    <i className="bi bi-house-door-fill"></i>
                </Col>
            </Row>
        </Navbar>
    )
}

export default Header;