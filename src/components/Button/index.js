import './index.css';
import { mounted } from '../../utils/mounted';

export const Button = ({
  className = '',
  id = '',
  style = '',
  children = '',
  type = 'button',
  palette = '',
} = {}) => {
  if (palette === 'primary') {
    style = 'background: #e91e63';
  } else if (palette === 'secondary') {
    style = { style };
  }

  mounted(() => {
    const buttonMenu = document.getElementById('button-menu');
    const menu = document.getElementById('menu');
    buttonMenu.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  });

  return /*html */ `
  <button
      id="${id}"
      class="button ${className}"
      palette='${palette}'
      style="${style}"
      type="${type}"
    >
      ${children}
    </button>`;
};
