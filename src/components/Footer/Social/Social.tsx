import React, { FC } from 'react';
import Button from '../../Button/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Email: FC = () => (
    <input type="email" placeholder="Adresse Email" />
)

const SocialIcon: FC<{ name: string; }> = ({ name }) => (<i className={name}></i>);

const Facebook: FC = () => <SocialIcon name="facebook" />;
const Twitter: FC = () => <SocialIcon name="twitter" />;

const Socail: FC = ({ children }) => (
    <Container className="social-section">
        <h1>SUIVEZ-NOUS !</h1>

        <Row className="social-media">
            <Facebook />
            <Twitter />
        </Row>
        <Row>
            <p className="social-info">
                Recevez les derniéres infos du CNEAC
            </p>
        </Row>
        <Row>
            <Col>
                <Email />
            </Col>
            <Col>
                <Button name="Je m'inscris" />
            </Col>
        </Row>
    </Container>
);

export default Socail;