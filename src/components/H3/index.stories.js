import { H3 } from './index';

export default {
  title: 'Components/H3',
};

export const Overview = () => {
  return /*html */ `<div>${H3({
    children: 'Hola Mundo',
    style: 'background: pink',
  })}</div>`;
};
