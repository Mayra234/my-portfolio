import './index.css';
import { NavLink } from '../NavLink';

export const ListNavLinks = ({ links = [] } = {}) => {
  return /*html*/ `
  <div class="links-menu">
    <img src="" alt="">
  </div>
    <ul class = 'navlinks'>
        ${links
          .map((link) => NavLink({ text: link.text, route: link.route }))
          .join('')}
    </ul>
    `;
};
