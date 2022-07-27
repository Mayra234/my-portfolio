import { Button } from './index';

export default {
  title: 'Components/Button',
};

export const ButtonPrimary = () => {
  return /*html */ `<div>${Button({
    children: 'Contáctame',
    palette: 'primary',
  })}</div>`;
};

export const ButtonSecondary = () => {
  return /*html */ `<div>${Button({
    children: 'Mayra',
    palette: 'secondary',
    style: 'color: black',
  })}</div>`;
};
