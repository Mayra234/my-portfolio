import './index.css';

export const H2 = ({ className = '', children = '', style = '' } = {}) => {
  return /*html */ `<h2 class='h2 ${className}' style='${style}'>${children}</h2>`;
};
