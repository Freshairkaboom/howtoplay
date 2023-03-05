import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders game title', () => {
  render(<App />);
  const title = screen.getByText(/How to play/i);
  expect(title).toBeInTheDocument();
});

test('start game button is not disabled', () => {
  const { getByRole } = render(<App />);
  const button = getByRole('button');
  expect(button).not.toBeDisabled();
});

test('start game button successfully renders game', () => {

  expect(() => getByText('test')).toThrow();

  const { getByRole } = render(<App />);
  const button = getByRole('button');
  fireEvent.click(button)

  const gameText = screen.getByText(/test/)
  expect(gameText).toBeInTheDocument();
});
