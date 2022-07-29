import './index.css';
import { H2 } from '../../../components/H2';
import { Separator } from '../../../components/Separator';
import { ProjectCard } from '../../../components/ProjectCard';
import image1 from '../../../assets/image/prueba.png';

export const Projects = () => {
  return /*html*/ `
  <a name='project'></a>
  <div class="container-projects">
    ${H2({ className: 'title', children: 'Mis Proyectos' })}
    ${Separator()}
    <p class='introduction'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Repudiandae odio cumque harum laborum dignissimos iste!
    </p>
    <div class='card-project'>
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
    </div>
  </div>
  `;
};
