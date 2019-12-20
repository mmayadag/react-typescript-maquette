import React, { FC } from 'react';

const Email: FC = () => (
    <input type="email" placeholder="Adresse Email" />
)

interface IButtonProps {
    name: string;
}

const SocialIcon: FC<IButtonProps> = ({ name }) => (<i className={name}></i>);

const Facebook: FC = () => <SocialIcon name="facebook" />;
const Twitter: FC = () => <SocialIcon name="twitter" />;

const Button: FC<IButtonProps> = ({ name }) => (
    <button className="btn">{name}</button>
);

const Socail: FC = ({ children }) => (
    <>
        <h1>SUIVEZ-NOUS !</h1>
        <div className="social-media">
            <Facebook />
            <Twitter />
        </div>
        <p>
            Recevez les derniéres infos du CNEAC
        </p>
        <div>
            <Email />
            <Button name="Je m'inscris" />
        </div>
    </>
);

export default Socail;