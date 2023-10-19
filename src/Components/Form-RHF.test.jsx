import { render, screen, fireEvent } from '@testing-library/react';
import FormRHF from './Form-RHF';

test('form submission', () => {
  const mockSubmitFunction = jest.fn();

  render(<FormRHF onSubmit={mockSubmitFunction} />);
  
  fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });

  fireEvent.click(screen.getByText('Submit'));
    
  expect(mockSubmitFunction).toHaveBeenCalled()
});