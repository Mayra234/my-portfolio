import { Footer } from './index';

export default {
  title: 'Components/Footer',
};

export const Overview = () => {
  return /*html*/ `<div>${Footer({
    children: /*html*/ `
  <p>© All Right Reserved By </p>
  `,
  })}</div>`;
};
