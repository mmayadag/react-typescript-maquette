import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

test('renders Main link', () => {
    const { getByText } = render(<Main />);
    const linkElement = getByText(/main/i);
    expect(linkElement).toBeInTheDocument();
});
