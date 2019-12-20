import React from 'react';
import FooterMenu from './FooterMenu/FooterMenu';
import Social from './Social/Social';

import { ReactComponent as Logo } from '../../assets/brand/logo@1x.svg';

interface IContainerProps {
    children: React.ReactNode
}

const Container: React.FC<IContainerProps> = ({ children }) => (<div className="container">{children}</div>);
const FooterItems = ["MENTIONS LEGALES", "PLAN DU SITE", "CONTACTS", "NOUR TROUVER"]
const Footer: React.FC = () => {
    return (
        <>
            <Container>
                <Social />
            </Container>
            <footer>
                <Logo className="footer-logo" />
                <FooterMenu items={FooterItems} />
            </footer>
        </>
    );
}

export default Footer;
