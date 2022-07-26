import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Avatar } from '../../components/Avatar';
import { ListNavLinks } from '../../components/ListNavLinks';

export const MainLayout = ({ children = '' } = {}) => {
  return /*html*/ `
    <div class="main-layout">
      ${Header({
        children: Navbar({
          children: /*html*/ `
          ${Avatar({ mainText: 'Alejandra', image: 'assets/image/foto2.jpg' })}
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
