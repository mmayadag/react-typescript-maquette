import React, { FC, ReactNode } from 'react';

interface IContainerProps {
    direction?: "row" | "column";
    children: ReactNode;
}

const Container: FC<IContainerProps> = ({ direction = "column", children }) => (<div className={`container-${direction}`}>{children}</div>);

export const Row: FC<{ children: ReactNode; }> = ({ children }) => (<Container direction="row">{children}</Container>)
export const Column: FC<{ children: ReactNode; }> = ({ children }) => (<Container>{children}</Container>)

export default Container;
