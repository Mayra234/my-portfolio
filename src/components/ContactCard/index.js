import { Card } from '../Card';
import { H2 } from '../H2';
import './index.css';

export const ContactCard = ({
  figure = '',
  title = '',
  children = '',
} = {}) => {
  return /*html*/ `
    ${Card({
      palette: 'primary',
      className: 'contact-me',
      children: /*html*/ `
        ${figure}
        ${H2({ className: 'title-contact', children: `${title}` })}
        <div>
            ${children}
        </div>
    `,
    })}
    `;
};
