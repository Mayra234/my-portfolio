import './index.css';

export const CardBasic = ({
  children = '',
  className = '',
  style = '',
} = {}) => {
  return /*html*/ `
    <div style='${style}' class='card-basic ${className}'>
        ${children}
    </div>
    `;
};
