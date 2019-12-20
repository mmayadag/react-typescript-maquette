import React, { FC } from 'react';
import Button from '../Button/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card: FC = () => (
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
)

const HeroOverlay: FC = () => (
    <>
        <Container>
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
        </Container>
    </>
);

export default HeroOverlay;