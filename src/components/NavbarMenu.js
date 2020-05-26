import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import corona from '../image/corona.jpg';
import { Link } from 'react-router-dom';

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
                        <Link
                            to="/"
                            className="btn btn-outline-dark mx-2 my-2 my-lg-0 text-white"
                            style={{ fontSize: '20px' }}
                        >
                            Home
                        </Link>

                        <Link
                            to="/news"
                            className="btn btn-outline-dark mx-2 my-2 my-lg-0 text-white"
                            style={{ fontSize: '20px' }}
                        >
                            News
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
