import { Card } from '../Card';
import { H1 } from '../H1';
import { H3 } from '../H3';
import './index.css';

export const Studies = () => {
  return /*html*/ `
    ${Card({
      palette: 'primary',
      children: /*html*/ `
        <div class='title-card'>
        ${H1({
          children: 'Portafolio personal Día de los Inocentes',
        })}
        ${H3({ children: 'Universidad de DVI (1997 - 2001)' })}
        </div>
        <p class="information">
            La educación debe ser muy
            interactivo. Ut tincidunt est ac dolor aliquam sodales.
            Phasellus sed mauris hendrerit, laoreet sem in, lobortis
            mauris hendrerit ante.
        </p>
      `,
    })}
  `;
};
