import { Card } from './index';
import { H2 } from '../H2/index.js';

export default {
  title: 'Components/Card',
};

export const Overview = () => {
  return /*html*/ `<div>${Card({
    children: /*html*/ `
     <i class = 'icon fa-solid fa-home'></i>
    ${H2({ children: 'LOCATION', style: 'font-size: 16px' })}
    <p>Mayra</p>
  `,
  })}</div>`;
};
