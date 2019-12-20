import React from 'react';

interface IFooterItem {
    url?: string;
    name: string;
}
const FooterMenuItem: React.FC<IFooterItem> = ({ url = "#", name }) => (
    <div>
        <a href={url} title={name}>{name}</a>
    </div>
)

export default FooterMenuItem;