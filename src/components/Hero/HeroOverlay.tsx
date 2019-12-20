import React, { FC } from 'react';
import Button from '../Button/Button';

const HeroOverlay: FC = () => (
    <>
        <div className="hero-overlay">
            <div className="container">
                <div className="hero-title">
                    L'ESEIGNEMENT AGRICOLE PAR CORRESPONDANCE
                </div>
                <div className="hero-headline">
                    Depuis plus de 20 ans nous préparons aux diplomes publics du Ministére de l'Agriculture.
                </div>
                <Button name="Présentation" />
            </div>
        </div>
    </>
);

export default HeroOverlay;