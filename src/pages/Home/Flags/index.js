import { Tabs } from '../../../components/Tabs';
import { Card } from '../../../components/Card';
import './index.css';
import { H1 } from '../../../components/H1';
import { H3 } from '../../../components/H3';
import { H2 } from '../../../components/H2';
import { Separator } from '../../../components/Separator';

export const Flags = () => {
  return /*html*/ `
    <a name='skills'></a>
    <div class='content-flags'>
      ${H2({ children: 'Habilidades' })}
      ${Separator()}
        ${Tabs({
          tabs: [
            { text: 'Estudios' },
            { text: 'Habilidades' },
            { text: 'Experiencia' },
          ],
          children: /*html*/ ` 
          <div class='container-card'>
            ${Card({
              className: 'card-tab',
              children: /*html*/ `
              <div class='title-card'>
                ${H1({ children: 'Portafolio personal Día de los Inocentes' })}
                ${H3({ children: 'Universidad de DVI (1997 - 2001)' })}
              </div>
              <div class='body-card'>
                <p class="information">
                  La educación debe ser muy
                  interactivo. Ut tincidunt est ac dolor aliquam sodales.
                  Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                  mauris hendrerit ante.
                </p>
              </div>
            `,
            })}
          </div>
          `,
        })}
    </div>
    `;
};
