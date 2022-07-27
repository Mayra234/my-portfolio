import './index.css';

export const Avatar = ({
  image = '',
  mainText = '',
  className = '',
  style = '',
} = {}) => {
  return /*html*/ `
    <div class="avatar ${className}">
      <a class='a'>
        <span class = 'image-avatar'>
          ${
            image
              ? /*html */ `<img class='img' src="${image}" />`
              : `${mainText[0] || ''}`
          }
        </span>
        <p class="avatar-name" style=${style}>${mainText}</p>
      </a>
  </div>
    `;
};
