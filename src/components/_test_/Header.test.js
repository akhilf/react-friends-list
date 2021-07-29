import React from 'react';
import Header from '../Header';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

test("Header renders with correct text", () => {
    const compoent = render(<Header />);
    const headerEle = compoent.getByTestId('header');

    expect(headerEle.textContent).toBe("Friends List");
})




