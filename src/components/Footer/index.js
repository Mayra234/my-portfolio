import './index.css';

export const Footer = ({ children = '' } = {}) => {
  return /*html*/ `
  <footer class="footer">
    <div class = 'content-footer'>
      ${children}
    </div>
  </footer>`;
};
