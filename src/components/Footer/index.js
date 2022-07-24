import './index.css';

export const Footer = ({ children = '' } = {}) => {
  return /*html*/ `
  <footer>
    <div class = 'content-footer'>
      ${children}
    </div>
  </footer>`;
};
