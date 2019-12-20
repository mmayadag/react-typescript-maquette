import React from 'react';
import Col from 'react-bootstrap/Col';

interface IMenuProps { items: string[]; }

const NavbarMenu: React.FC<IMenuProps> = ({
    children,
    items
}) => (
        <>
            {items.map(
                item => (<Col>{item}</Col>)
            )}
        </>
    );

export default NavbarMenu;