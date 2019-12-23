import React, { FC } from 'react';
import Button from '../Button/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Selector from './CardsDivider/Selector';
import Card , {ICardsProps} from './Card';

const CardsData: ICardsProps[] = [
    {title:'BAC PRO', content:'Technicien Conseil - Vente de Produits de Jardi', className:'card1'},
    {title:'BAC TECHNO', content:'STAV*<br/> Transformation <br/> Alimentaire', className:'card2'},
    {title:'BTSA', content:'Dévelopment,<br/> Animation des<br/> Territoires<br/> Ruraux', className:'card3'}
]

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
                { CardsData.map(kart => (
                <Col>
                    <Card {...kart} />
                </Col>
                )) }
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