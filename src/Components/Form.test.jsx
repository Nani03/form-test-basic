import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('form submission', () => {
  // Create a mock function
  const mockSubmitFunction = jest.fn();

  render(<Form onSubmit={mockSubmitFunction} />);
  
  // Fill in the form fields
  fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });

  // Simulate form submission
  fireEvent.click(screen.getByText('Submit'));

  // Assert that the mock function was called
  expect(mockSubmitFunction).toHaveBeenCalled();
});