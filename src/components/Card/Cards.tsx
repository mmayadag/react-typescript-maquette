import React, { FC } from 'react';
import Button from '../Button/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Selector from './CardsDivider/Selector';
const Card: FC = () => (
    <>
        <div className="card1">
            <div className="card-overlay">
                <div className="card-button">
                    <Button name="Bac Pro" className="btn-card"></Button>
                </div>
                <h3>
                    Technicien Conseil -
                        <br />
                    Vente de Produits
                        <br />
                    de Jardi
                </h3>

            </div>
        </div>
    </>
)

const HeroOverlay: FC = () => (
    <>
        <Container fluid={true} className="cards-divider">
            <Container>
                <Row>
                    <Col className="card-select-title">
                        <h2>TROUVER MA FORMATION</h2>
                    </Col>
                    <Col className="selector">
                        <Selector />
                    </Col>
                    <Col className="selector">
                        <Selector />
                    </Col>
                </Row>
                
            </Container>            
        </Container>
        <Container className="cards">
            <Row>
                <Col>
                    <Card />
                </Col>
                <Col>
                    <Card />
                </Col>
                <Col>
                    <Card />
                </Col>
            </Row>
            <Row>
                <Col className="cards-footer-note">
                    *STAV. Sciences et Technologies de I'Agronomie et du Vivant
                </Col>
            </Row>
        </Container>
    </>
);

export default HeroOverlay;