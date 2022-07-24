import './index.css';

export const Avatar = ({ image = '', mainText = '', className = '' } = {}) => {
  return /*html*/ `
    <div class="avatar ${className}">
      <a>
        <span class = 'image'>
          ${
            image
              ? /*html */ `<img src="${image}" alt="${mainText}" />`
              : `${mainText[0] || ''}`
          }
        </span>
        <p class="avatar-name">${mainText}</p>
      </a>
  </div>
    `;
};
