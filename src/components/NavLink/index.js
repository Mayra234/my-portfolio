export const NavLink = ({
  className = '',
  id = '',
  text = '',
  route = '',
} = {}) => {
  return /*html*/ `
  <li class='li ${className}'>
    <a  class='nav-link' href='${route}' id = '${id}'>${text}</a>
  </li>`;
};
