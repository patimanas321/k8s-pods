import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

test('should render Avatar', () => {
  const text = 'Some Name';
  const initials = 'SN';
  render(<Avatar text={text} />);
  const el = screen.getByText(initials);
  expect(el).toBeInTheDocument();
  expect(el).toHaveAttribute('aria-hidden');
});
