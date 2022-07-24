import './index.css';

export const Tab = ({ id = '', className = '', children = '' } = {}) => {
  return /*html*/ `
    <li id='${id}' class='nav-item ${className}'>
        <a href="" class="nav-link">${children}</a>
    </li>
    `;
};
