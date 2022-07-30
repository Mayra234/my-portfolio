import './index.css';
import { H2 } from '../../../components/H2';
import { Separator } from '../../../components/Separator';
import { ProjectCard } from '../../../components/ProjectCard';

export const Projects = () => {
  return /*html*/ `
  <div id="project" class="container-projects">
    ${H2({ className: 'title', children: 'Proyectos' })}
        ${Separator()}
        <p class='introduction'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae odio cumque harum laborum dignissimos iste!
        </p>
    ${ProjectCard({
      route: '',
      figure: 'house',
      title: 'Desarrollo web',
      children:
        'Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariatur',
    })}
  </div>
  `;
};
