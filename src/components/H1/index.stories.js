import { H1 } from './index';

export default {
  title: 'Components/H1',
};

export const Overview = () => {
  return /*html */ `<div>${H1({
    children: 'Hola Mundo',
    style: 'background: pink',
  })}</div>`;
};
