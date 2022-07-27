import { NavLink } from './index';

export default {
  title: 'Components/NavLink',
};

export const Overview = () => {
  return /*html*/ `
  <div>${NavLink({ text: 'HOME', style: 'color: black' })}</div>
  `;
};
