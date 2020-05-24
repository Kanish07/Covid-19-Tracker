import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'reactstrap';
import corona from '../image/corona.jpg';

export default function NavbarMenu() {
    return (
        <div id="home">
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ background: '#1E1E30' }}
                variant="dark"
                className="fixed-top"
            >
                <Navbar.Brand style={{ fontSize: '20px' }}>
                    <img
                        src={corona}
                        width="30"
                        height="30"
                        className="d-inline-block align-top rounded-circle"
                        alt="logo"
                    />
                    Covid-19 Update
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <br />
                        <NavLink
                            href="#home"
                            className="btn btn-outline-dark mx-2 my-2 my-lg-0 text-white"
                            style={{ fontSize: '20px' }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            href="#footer"
                            className="btn btn-outline-dark mx-2 my-2 my-lg-0 text-white"
                            style={{ fontSize: '20px' }}
                        >
                            About
                        </NavLink>
                        <NavLink
                            className="btn btn-outline-dark mx-2 my-2 my-lg-0 text-white"
                            style={{ fontSize: '20px' }}
                            href="https://www.instagram.com/kanishkar_bubeshkumar_07/"
                        >
                            Created by Kanishkar Bubeshkumar
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
