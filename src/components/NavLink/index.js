import './index.css';
import { mounted } from '../../utils/mounted';

export const NavLink = ({
  className = '',
  id = '',
  text = '',
  route = '',
  style = '',
} = {}) => {
  return /*html*/ `
  <li class='nav ' style="${style}">
    <a class='link-nav ${className}' href='${route}' id = '${id}'>
      ${text}
    </a>
  </li>`;
};
