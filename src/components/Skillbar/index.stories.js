import { Skillbar } from './index';

export default {
  title: 'Components/Skillbar',
};

export const Overview = () => {
  return /*html*/ `
    <div>${Skillbar({
      mainText: 'HTML/CSS',
      percentage: 15,
    })}</div>
    `;
};
