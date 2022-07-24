import './index.css';

export const H1 = ({ className = '', children = '', style = '' } = {}) => {
  return /*html */ `<h1 class='h1 ${className}' style='${style}'>${children}</h1>`;
};
