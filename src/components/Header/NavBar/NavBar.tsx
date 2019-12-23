import React from 'react';
import Col from 'react-bootstrap/Col';

interface IMenuProps { items: string[]; }

const NavbarMenu: React.FC<IMenuProps> = ({
    children,
    items
}) => (
        <>
            {items.map(
                item => (<Col><a href={`#${item}`} title={item}>{item}</a></Col>)
            )}
        </>
    );

export default NavbarMenu;