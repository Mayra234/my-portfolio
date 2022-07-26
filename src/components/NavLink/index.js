export const NavLink = ({
  className = '',
  id = '',
  text = '',
  route = '#',
} = {}) => {
  return /*html*/ `
  <li class='li ${className}'>
    <a class='link-nav' href='${route}' id = '${id}'>${text}</a>
  </li>`;
};
