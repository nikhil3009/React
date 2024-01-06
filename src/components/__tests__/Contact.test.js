/** @format */

import { render, screen } from '@testing-library/react';
import ContactUs from '../ContactUs';
import '@testing-library/jest-dom';

test('should load contact us page', () => {
	render(<ContactUs />);
	const heading = screen.getByRole('heading');
	expect(heading).toBeInTheDocument();
});
test('should have button from contact us page', () => {
	render(<ContactUs />);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
});
test('should load two input boxes from contact us page', () => {
	render(<ContactUs />);
	const inputBoxes = screen.getAllByRole('textbox');
	expect(inputBoxes.length).toBe(2);
});
