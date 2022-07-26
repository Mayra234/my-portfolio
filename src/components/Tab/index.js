import './index.css';

export const Tab = ({
  id = '',
  className = '',
  text = '',
  route = '',
} = {}) => {
  return /*html*/ `
    <li id='${id}' class='nav-item ${className}'>
        <a href="${route}" class="nav-link">${text}</a>
    </li>
    `;
};
