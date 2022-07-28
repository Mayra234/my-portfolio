import { Header } from './index';
import { Button } from '../Button';
import { Navbar } from '../Navbar';
import { Avatar } from '../Avatar';
import { ListNavLinks } from '../ListNavLinks';

export default {
  title: 'Components/Header',
};

export const Overview = () => {
  return /*html */ `
  <div>
    ${Header({
      style: 'background: pink',
      children: /*html*/ `
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
      `,
      menuResponsive: /*html*/ `
            ${Button({
              palette: 'secondary',
              className: 'bar-menu',
              children: /*html*/ `
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            `,
            })}
            `,
    })}
  </div>
  `;
};
