import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Avatar } from '../../components/Avatar';
import { ListNavLinks } from '../../components/ListNavLinks';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

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
                { text: 'Sobre mi', route: '#about-me' },
                { text: 'Hoja de vida', route: '#resume' },
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
      ${Footer({
        children: /*html*/ `
        <p>© All Right Reserved By </p>
      `,
      })}
    </div>
    `;
};
