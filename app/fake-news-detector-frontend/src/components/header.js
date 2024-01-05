import {React} from "react";

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import  { LinkContainer } from 'react-router-bootstrap';

function Header(props) {

    const { activeContainer } = props;

    return (
        <header>
            <Container>
                <Navbar bg="" expand="lg">
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand href="/">
                                <span style={{fontWeight: 600, color: '#136996'}}>Fact</span> <span style={{color: '#48a2f8'}}>Check</span>
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="hearder-navbar" />
                        <Navbar.Collapse id="hearder-navbar" className="justify-content-end">
                        <Nav>
                            <LinkContainer to='/'>
                                <Nav.Link className={activeContainer === 1 ? 'active-link' : 'inactive-link'}>
                                    <div>
                                        <li>
                                            <div>Live News</div>
                                        </li>
                                    </div>
                                    </Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to='/checkbytitle'>
                                <Nav.Link className={activeContainer === 2 ? 'active-link' : 'inactive-link'}>
                                    <div>
                                        <li>
                                            <div>Check News By Title</div>
                                        </li>
                                    </div>
                                    </Nav.Link>
                            </LinkContainer>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </header>
    )
};

export default Header;