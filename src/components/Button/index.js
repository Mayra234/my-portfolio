import './index.css';

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
    style = 'background: transparent';
  }
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
