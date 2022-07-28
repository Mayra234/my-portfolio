import './index.css';
import { H2 } from '../../../components/H2';
import { Card } from '../../../components/Card';
import { H3 } from '../../../components/H3';
import { Separator } from '../../../components/Separator';

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
        ${Card({
          className: 'project',
          children: /*html*/ `
          <a class="link-project" href="">
            <div class='container-image-project'>
              <img class='image-project' src="" alt="">
            </div>
            ${H3({ className: 'title-project', children: 'Desarrollo web' })}
          </a>
          <p class='text-card-project'>
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        `,
        })}
        ${Card({
          palette: 'secondary',
          className: 'project',
          children: /*html*/ `
          <a class="link-project" href="">
            <div class='container-image-project'>
              <img class='image-project' src="" alt="">
            </div>
            ${H3({ className: 'title-project', children: 'Desarrollo web' })}
          </a>
          <p class='text-card-project'>
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        `,
        })}
        ${Card({
          className: 'project',
          children: /*html*/ `
          <a class="link-project" href="">
            <div class='container-image-project'>
              <img class='image-project' src="" alt="">
            </div>
            ${H3({ className: 'title-project', children: 'Desarrollo web' })}
          </a>
          <p class='text-card-project'>
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        `,
        })}
        ${Card({
          className: 'project',
          children: /*html*/ `
          <a class="link-project" href="">
            <div class='container-image-project'>
              <img class='image-project' src="" alt="">
            </div>
            ${H3({ className: 'title-project', children: 'Desarrollo web' })}
          </a>
          <p class='text-card-project'>
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        `,
        })}
        ${Card({
          className: 'project',
          children: /*html*/ `
          <a class="link-project" href="">
            <div class='container-image-project'>
              <img class='image-project' src="" alt="">
            </div>
            ${H3({ className: 'title-project', children: 'Desarrollo web' })}
          </a>
          <p class='text-card-project'>
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        `,
        })}
        ${Card({
          className: 'project',
          children: /*html*/ `
          <a class="link-project" href="">
            <div class='container-image-project'>
              <img class='image-project' src="" alt="">
            </div>
            ${H3({ className: 'title-project', children: 'Desarrollo web' })}
          </a>
          <p class='text-card-project'>
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        `,
        })}
    </div>
  </div>
  `;
};
