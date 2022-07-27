import './index.css';

export const Navbar = ({
  children = '',
  mainContent = '',
  className = '',
  responsive = '',
} = {}) => {
  return /*html*/ `
  <div class = "navbar">
    <div>
      ${children}
    </div>
    <div class='body ${className}'>
      ${responsive}
      ${mainContent}
    </div>
  </div>
  `;
};
