import './index.css';

window.addEventListener('scroll', () => {
  let header = document.querySelector('.header');
  header.classList.toggle('scroll', window.scrollY > 0);
});

export const Header = ({
  className = '',
  children = '',
  style = '',
  menuResponsive = '',
} = {}) => {
  return /*html*/ `<div class='header ${className}' style="${style}">
    ${children}
    ${menuResponsive}
  </div>`;
};
