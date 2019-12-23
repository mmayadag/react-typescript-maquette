import React, { FC } from 'react';
import Button from '../Button/Button';

export interface ICardsProps{
    title:string;
    content:string;
    className:string;
}
const Card: FC<ICardsProps> = ({title,content,className}) => (
    <>
        <div className={`card ${className}`}>
            <div className="card-overlay">
                <div className="card-button">
                    <Button name={title} className="btn-card"></Button>
                </div>
                <h3 dangerouslySetInnerHTML={{__html:content}}></h3>
            </div>
        </div>
    </>
)
export default Card;
