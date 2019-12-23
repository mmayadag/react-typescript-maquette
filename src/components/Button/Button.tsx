import React, { FC } from 'react';

interface IButtonProps {
    name: string;
    className?: string;
}

const Button: FC<IButtonProps> = ({ name, className="" }) => (
    <button className={`btn-regular ${className}`}> {name}</ button>
);

const ButtonRegular: FC<IButtonProps> = ({ name, className }) => (
    <button className={`btn-regular btn-small ${className}`}> {name}</ button>
);

export default Button;
export {
    ButtonRegular
};
