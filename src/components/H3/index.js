import './index.css';

export const H3 = ({ className = '', children = '', style = '' } = {}) => {
  return /*html */ `<h3 class='h3 ${className}' style='${style}'>${children}</h3>`;
};
