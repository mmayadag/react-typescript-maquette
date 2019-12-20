import React, { FC } from 'react';
import { ReactComponent as LogoSvg } from '../../assets/brand/logo@1x.svg';

const Logo: FC<{ className?: string }> = (props) => (<LogoSvg {...props} />);

export default Logo;