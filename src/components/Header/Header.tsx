import React from 'react';
import Logo from '../Logo/Logo';
import { ReactComponent as SearchSvg } from '../../assets/icons/magnifying-glass.svg';

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
                <div id="hero-background"></div>
                <HeroOverlay />
                <div className="header">
                    <Container>
                        <Row className="nav-menu">
                            <Col>
                                <Logo className="header-logo" />
                            </Col>

                            <NavBar items={items} />
                            <Col className="col-search-button">
                                <SearchSvg/>
                            </Col>
                            <Col><Button name="Inscrivez-vous" className="btn-menu"></Button></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Header;
