import './index.css';

export const Navbar = ({ children = '', mainContent = '' } = {}) => {
  return /*html*/ `
  <div class = "navbar">
      ${children}
      ${mainContent}
  </div>
  `;
};
