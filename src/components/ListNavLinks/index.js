import './index.css';
import { NavLink } from '../NavLink';

export const ListNavLinks = ({ links = [], id = '' } = {}) => {
  return /*html*/ `
      <ul id='${id}' class = 'navlinks'>
          ${links
            .map((link) => NavLink({ text: link.text, route: link.route }))
            .join('')}
      </ul>
  `;
};
