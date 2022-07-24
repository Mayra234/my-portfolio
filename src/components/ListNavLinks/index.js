import { NavLink } from '../NavLink';

export const ListNavLinks = ({ links = [] } = {}) => {
  return /*html*/ `
    <ul class = 'navlinks'>
        ${links
          .map((link) => NavLink({ text: link.text, route: link.route }))
          .join('')}
    </ul>
    `;
};
