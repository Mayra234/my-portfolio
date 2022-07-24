import './index.css';

export const MainLayout = ({ children = '' } = {}) => {
  return /*html*/ `
    <div class="main-layout">
      ${children}
    </div>
    `;
};
