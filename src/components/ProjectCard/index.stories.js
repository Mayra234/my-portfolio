import { ProjectCard } from './index';
import image1 from '../../assets/image/prueba.png';

export default {
  title: 'Components/ProjectCard',
};

export const Overview = () => {
  return /*html*/ `
    ${ProjectCard({
      figure: 'home',
      title: 'Desarrollo web',
      children:
        'Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariatur',
    })}
    `;
};
