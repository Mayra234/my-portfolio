import { Card } from '../Card';
import { SkillBar } from '../SkillBar';
import './index.css';

export const Skills = () => {
  return /*html*/ `
    ${Card({
      palette: 'primary',
      children: /*html*/ `
        ${SkillBar({
          mainText: 'HTML',
          percentage: 90,
        })}
        ${SkillBar({
          mainText: 'CSS',
          percentage: 10,
        })}
        ${SkillBar({
          mainText: 'Javascript',
          percentage: 100,
        })}
        ${SkillBar({
          mainText: 'React',
          percentage: 70,
        })}
      `,
    })}
  `;
};
