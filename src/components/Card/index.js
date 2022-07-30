import './index.css';

export const Card = ({
  children = '',
  className = '',
  palette = '',
  style = '',
} = {}) => {
  if (palette === 'primary') {
    style = 'box-shadow: 0 20px 40px rgb(0 0 0 / 20%); padding: 30px;';
  } else if (palette === 'secondary') {
    style = 'padding: 40px 20px; margin: 0 15px 15px; overflow: hidden;';
  }

  return /*html*/ `
  <div class = 'card ${className}' palette='${palette} ' style='${style}'>
    ${children}
  </div>`;
};
