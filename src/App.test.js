import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Creative Developer/i);
  expect(linkElement).toBeInTheDocument();
});