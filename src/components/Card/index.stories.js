import { Card } from './index';
import { H2 } from '../H2/index.js';

export default {
  title: 'Components/Card',
};

export const CardPrimary = () => {
  return /*html*/ `<div>${Card({
    palette: 'primary',
    children: /*html*/ `
     <i class = 'icon fa-solid fa-home'></i>
    ${H2({ children: 'LOCATION', style: 'font-size: 16px' })}
    <p>Mayra</p>
  `,
  })}</div>`;
};

export const CardSecondary = () => {
  return /*html*/ `<div>${Card({
    palette: 'secondary',
    children: /*html*/ `
     <i class = 'icon fa-solid fa-home'></i>
    ${H2({ children: 'LOCATION', style: 'font-size: 16px' })}
    <p>Mayra</p>
  `,
  })}</div>`;
};
