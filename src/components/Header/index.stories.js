import { Header } from './index';

export default {
  title: 'Components/Header',
};

export const Overview = () => {
  return /*html */ `<div>${Header({
    style: 'background: pink',
    children: 'Hola Mundo',
  })}</div>`;
};
