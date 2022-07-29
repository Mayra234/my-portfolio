import './index.css';

export const Tab = ({ id = '', className = '', text = '' } = {}) => {
  return /*html*/ `
  <div class="container-tab">
    <li id='${id}' class='tab-nav-item ${className}'>
        <a class="tab-nav-link">${text}</a>
    </li>
  </div>
    `;
};
