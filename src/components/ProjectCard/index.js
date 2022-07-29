import { Card } from '../Card';
import { H3 } from '../H3';
import { Icon } from '../Icon';
import './index.css';

export const ProjectCard = ({
  route = '',
  figure = '',
  title = '',
  children = '',
} = {}) => {
  return /*html*/ `
    ${Card({
      palette: 'secondary',
      className: 'project',
      children: /*html*/ `
      <a class="link-project" href="${route}">
        ${Icon({ icon: `${figure}` })}
        ${H3({ className: 'title-project', children: `${title}` })}
      </a>
      <div class="text-card-project">
          ${children}
      </div>
      
    `,
    })}
    `;
};
