import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headindContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;
  expect(headindContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headindContainer).toHaveStyleRule('background', 'red');
});
  // expect(headindContainer).toMatchSnapshot();
;
