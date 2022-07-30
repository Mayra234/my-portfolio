import './index.css';
import { mounted } from '../../utils/mounted';

export const NavLink = ({
  className = '',
  id = '',
  text = '',
  route = '',
  style = '',
} = {}) => {
  mounted(() => {
    const header = document.querySelector('.scroll');
    const linksNav = document.querySelectorAll('.nav');
    const links = document.querySelectorAll('.link-nav');
    linksNav.forEach((link, i) => {
      linksNav[i].addEventListener('click', () => {
        if (header.classList.contains('scroll')) {
          links[i].classList.toggle('bar');
        } else {
          linksNav.forEach((tab, i) => {
            links.classList.remove('bar');
          });
        }
      });
    });
  });

  return /*html*/ `
  <li class='nav ' style="${style}">
    <a class='link-nav ${className}' href='${route}' id = '${id}'>
      ${text}
    </a>
  </li>`;
};
