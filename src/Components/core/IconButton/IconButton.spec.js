import React from 'react';
import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

test('should render IconButton', () => {
  const ariaLabel = 'Click Me';
  const testId = 'sample-icon-button';
  render(<IconButton icon={faCircle} type="text" ariaLabel={ariaLabel} testId={testId} />);
  const el = screen.getByTestId(testId);
  expect(el).toBeInTheDocument();
  expect(el).toHaveAttribute('type');
  expect(el).toHaveAttribute('aria-label');
});
