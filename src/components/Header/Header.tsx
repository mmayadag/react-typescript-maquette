import React from 'react';
import Logo from '../Logo/Logo';

const Header: React.FC = () => {
    return (
        <>
            <div className="header">
                <Logo className="header-logo" />
                <nav>
                </nav>

            </div>
        </>
    );
}

export default Header;
