import { Navbar } from './index.js';
import { Avatar } from '../Avatar/index.js';
import { ListNavLinks } from '../ListNavLinks/index.js';

export default {
  title: 'Components/Navbar',
};

export const Overview = () => {
  return /*html*/ `
    <div>
        ${Navbar({
          children: /*html*/ `
          ${Avatar({ mainText: 'Alejandra' })}
        `,
          mainContent: /*html*/ `
          ${ListNavLinks({
            links: [
              { text: 'Inicio' },
              { text: 'Banderas' },
              { text: 'Sobre mi' },
              { text: 'Hoja de vida' },
              { text: 'Proyectos' },
              { text: 'Contacto' },
            ],
          })}
          `,
        })}
    </div>
    `;
};
