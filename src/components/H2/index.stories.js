import { H2 } from './index';

export default {
  title: 'Components/H2',
};

export const Overview = () => {
  return /*html */ `<div>${H2({
    children: 'Hola Mundo',
    style: 'background: pink',
  })}</div>`;
};
