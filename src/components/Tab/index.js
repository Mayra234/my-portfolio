import './index.css';

export const Tab = ({
  id = '',
  className = '',
  text = '',
  route = '',
} = {}) => {
  return /*html*/ `
  <div class="container-tab">
    <li id='${id}' class='tab-nav-item ${className}'>
        <a href="${route}" class="tab-nav-link">${text}</a>
    </li>
  </div>
    `;
};
