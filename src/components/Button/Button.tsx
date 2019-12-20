import React, { FC } from 'react';

interface IButtonProps {
    name: string;
}

const Button: FC<IButtonProps> = ({ name }) => (
    <button className="btn">{name}</button>
);

export default Button;