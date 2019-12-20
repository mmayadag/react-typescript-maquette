import React from 'react';

import FooterMenuItem from './FooterMenuItem';
interface IFooterMenuProps { items: string[]; }

const FooterMenu: React.FC<IFooterMenuProps> = ({
    children,
    items
}) => (
        <>
            {items.map((item: string) => (<FooterMenuItem name={item} />))}
        </>
    );

export default FooterMenu;