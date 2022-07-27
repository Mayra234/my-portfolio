import './index.css';

export const NavLink = ({
  className = '',
  id = '',
  text = '',
  route = '',
  style = '',
} = {}) => {
  return /*html*/ `
  <li class='nav ${className}' style="${style}">
    <a class='link-nav' href='${route}' id = '${id}'>
      ${text}
    </a>
  </li>`;
};
