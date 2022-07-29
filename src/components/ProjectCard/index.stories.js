import { ProjectCard } from './index';
import image1 from '../../assets/image/prueba.png';

export default {
  title: 'Components/ProjectCard',
};

export const Overview = () => {
  return /*html*/ `
    ${ProjectCard({
      figure: /*html*/ `
        <div class='container-image-project'>
          <img class='image-project' src="${image1}" alt="">
        </div>
      `,
      title: 'Desarrollo web',
      children:
        'Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariatur',
    })}
    `;
};
