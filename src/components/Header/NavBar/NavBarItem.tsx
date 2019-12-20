import React from 'react';

const NavBarItem: React.FC<{ title: string }> = ({
    children,
    title
}) => <div title={title}>{children}</div>;

export default NavBarItem;