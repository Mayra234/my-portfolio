import { ContactCard } from './index';

export default {
  title: 'Components/ContactCard',
};

export const Overview = () => {
  return /*html*/ `
    ${ContactCard({
      title: 'Teléfono',
      children: '3126098992',
    })}
    `;
};
