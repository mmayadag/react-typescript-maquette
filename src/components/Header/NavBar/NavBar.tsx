import React from 'react';

interface IMenuProps { items: string[]; }

const NavbarMenu: React.FC<IMenuProps> = ({
    children,
    items
}) => (
        <>
            {items.map(
                item => (<div>{item}</div>)
            )}
        </>
    );

export default NavbarMenu;