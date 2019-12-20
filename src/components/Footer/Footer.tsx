import React from 'react';
import Logo from '../Logo/Logo';
import FooterMenu from './FooterMenu/FooterMenu';
import Social from './Social/Social';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const FooterItems = ["MENTIONS LEGALES", "PLAN DU SITE", "CONTACTS", "NOUR TROUVER"]
const Footer: React.FC = () => {
    return (
        <>
            <Container>
                <Social />
            </Container>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <Logo className="footer-logo" />
                        </Col>
                        <FooterMenu items={FooterItems} />
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
