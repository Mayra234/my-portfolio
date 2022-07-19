export const Button = ({
  id = '',
  style = '',
  children = '',
  type = 'button',
} = {}) => {
  return /*html */ `<button
      id="${id}"
      class="button"
      style="${style}"
      type="${type}"
    >${children}</button>`;
};
