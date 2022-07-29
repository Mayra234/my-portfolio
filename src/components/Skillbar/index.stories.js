import { SkillBar } from './index';

export default {
  title: 'Components/SkillBar',
};

export const Overview = () => {
  return /*html*/ `
    <div>${SkillBar({
      mainText: 'HTML/CSS',
      percentage: 15,
    })}</div>
    `;
};
