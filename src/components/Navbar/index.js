import { Avatar } from '../Avatar';
import { ListNavLinks } from '../ListNavLinks';
import './index.css';

export const Navbar = ({ children = '', mainContent = '' } = {}) => {
  return /*html*/ `
  <div class = "navbar">
    <div>
        ${children}
    </div>
    <div>
        ${mainContent}
    </div>
  </div>
  `;
};
