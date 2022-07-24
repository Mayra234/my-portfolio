import './index.css';

export const Header = ({ className = '', children = '', style = '' } = {}) => {
  return /*html*/ `<div class='header ${className}' style="${style}">${children}</div>`;
};
