import React from 'react';
import { ReactComponent as Logo } from '../../assets/brand/logo@1x.svg';

const Header: React.FC = () => {
    return (
        <>
            <div className="header">
                <Logo id="header-logo" />
                <nav>
                </nav>

            </div>
        </>
    );
}

export default Header;
