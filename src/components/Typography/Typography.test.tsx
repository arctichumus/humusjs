import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Typography from './Typography';
import { TypographyVariant, Color, TextAlign } from '../../utils/constants';

describe('Typography', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Typography>
        <span>Test Text</span>
      </Typography>
    );

    const textElement = getByText('Test Text');
    expect(textElement).toBeInTheDocument();
  });

  it('applies correct className based on variant prop', () => {
    const { container } = render(<Typography variant={TypographyVariant.Header} />);
    expect(container.firstChild).toHaveClass('typography__Header');
  });

  it('applies correct color style based on color prop', () => {
    const { container } = render(<Typography color={Color.p10} />);
    expect(container.firstChild).toHaveStyle({ color: '#21005D' });
  });

  it('applies correct textAlign style based on textAlign prop', () => {
    const { container } = render(<Typography textAlign={TextAlign.left} />);
    expect(container.firstChild).toHaveStyle({ textAlign: 'left' });
  });

  it('applies correct case style based on upperCase prop', () => {
    const { container } = render(<Typography upperCase={true} />);
    console.log(container.firstChild)
    expect(container.firstChild).toHaveClass('typography--upper-case');
  });

  it('matches snapshot', () => {
    const { container } = render(<Typography />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
