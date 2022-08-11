import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../app";
test('Test for display app header', async () => {
    render(<App />);
    const header= await waitFor(() => screen.getByTestId('header'));
    
    expect(header.textContent).toBe('RESTy');

});
test('when press button show result  ', async () => {
    render(<App />);
    const button = screen.getByTestId('button');
    const results = await waitFor(() => screen.getByTestId("data"));
    fireEvent.click(button);
    expect(results).toHaveTextContent('Loading つづく');
    
});