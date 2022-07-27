import './index.css';

export const NavLink = ({
  className = '',
  id = '',
  text = '',
  route = '#',
} = {}) => {
  return /*html*/ `
  <li class='nav ${className}'>
    <a class='link-nav' href='${route}' id = '${id}'>${text}</a>
  </li>`;
};
