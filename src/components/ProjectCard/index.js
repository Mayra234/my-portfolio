import { Card } from '../Card';
import { H3 } from '../H3';
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
      <a class="link-project" href="${route}"></a>
        ${figure}
        ${H3({ className: 'title-project', children: `${title}` })}
        <div class="text-card-project">
            ${children}
        </div>
    `,
    })}
    `;
};
