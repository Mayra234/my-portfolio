import './index.css';

export const Card = ({ children = '', className = '' } = {}) => {
  return /*html*/ `
  <div class = 'card ${className}'>
    ${children}
  </div>`;
};
