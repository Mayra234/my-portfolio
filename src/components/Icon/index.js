import './index.css';

export const Icon = ({ icon = '' } = {}) => {
  return /*html*/ `<i class = 'icon fa-solid fa-${icon}' ></i>`;
};
