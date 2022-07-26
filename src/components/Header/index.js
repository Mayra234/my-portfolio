import './index.css';

window.addEventListener('scroll', () => {
  let header = document.querySelector('.navbar');
  header.classList.toggle('scroll', window.scrollY > 0);
});

export const Header = ({ className = '', children = '', style = '' } = {}) => {
  return /*html*/ `<div class='header ${className}' style="${style}">${children}</div>`;
};
