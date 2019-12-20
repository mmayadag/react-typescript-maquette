import React from 'react';
import Logo from '../Logo/Logo';
import HeroOverlay from '../Hero/HeroOverlay';
import NavBar from './NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../Button/Button';


const items = ["QUI SOMMES-NOUS", "SECTEURS", "FORMATION", "TéMOIGNAGE", "ACTUALITE"];
const Header: React.FC = () => {
    return (
        <>
            <div className="hero">
                <div className="header">
                    <Container>
                        <Row className="nav-menu">
                            <Col>
                                <Logo className="header-logo" />
                            </Col>

                            <NavBar items={items} />
                            <Col className="col-search-button"><i className="search-button"></i></Col>
                            <Col><Button name="Inscrivez-vous" className="btn-menu"></Button></Col>
                        </Row>
                    </Container>
                </div>
                <HeroOverlay />
            </div>
        </>
    );
}

export default Header;
