import React from 'react';
import Col from 'react-bootstrap/Col';

interface IFooterItem {
    url?: string;
    name: string;
}
const FooterMenuItem: React.FC<IFooterItem> = ({ url = "#", name }) => (
    <Col>
        <a href={url} title={name}>{name}</a>
    </Col>
)

export default FooterMenuItem;