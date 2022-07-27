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
        children: Navbar({
          children: /*html*/ `
          ${Avatar({
            mainText: 'Mayra',
            image:
              'https://static2.abc.es/media/play/2020/09/29/avatar-kE4H--1024x512@abc.jpeg',
          })}
          `,
          responsive: /*html*/ `
          <div>
            ${Button({
              palette: 'secondary',
              className: 'bar-menu',
              children: /*html*/ `
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            `,
            })}
          </div>
          `,
          mainContent: /*html*/ `
          ${ListNavLinks({
            links: [
              { text: 'Inicio' },
              { text: 'Sobre mi' },
              { text: 'Banderas' },
              { text: 'Hoja de vida' },
              { text: 'Proyectos' },
              { text: 'Contacto' },
            ],
          })}
          `,
        }),
      })}
      ${children}
    </div>
    `;
};
