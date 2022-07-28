import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Avatar } from '../../components/Avatar';
import { ListNavLinks } from '../../components/ListNavLinks';
import { Button } from '../../components/Button';

export const MainLayout = ({ children = '' } = {}) => {
  return /*html*/ `
    <div class="main-layout">
     ${Header({
       children: /*html*/ `
        ${Navbar({
          children: /*html*/ `
            ${Avatar({ mainText: 'Mayra' })}
          `,
          mainContent: /*html*/ `
            ${ListNavLinks({
              id: 'menu',
              links: [
                { text: 'Inicio', route: '#banner' },
                { text: 'Habilidades', route: '#skills' },
                { text: 'Sobre mi', route: '#about-me' },
                { text: 'Proyectos', route: '#project' },
                { text: 'Contacto', route: '#contact' },
              ],
            })}
          `,
        })}
      `,
       menuResponsive: /*html*/ `
            ${Button({
              id: 'button-menu',
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
      ${children}
    </div>
    `;
};
