import { Button } from './index';

export default {
  title: 'Components/Button',
};

export const Overview = () => {
  return /*html */ `<div>${Button({
    children: 'Contáctame',
    palette: 'secondary',
  })}</div>`;
};
