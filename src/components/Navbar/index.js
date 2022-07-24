import { Avatar } from '../Avatar';
import { ListNavLinks } from '../ListNavLinks';
import './index.css';

export const Navbar = () => {
  return /*html*/ `
  <div class = "navbar">
    <div>
        ${Avatar({ className: 'logo', mainText: 'Alejandra' })}
    </div>
    <div>
        ${ListNavLinks({
          links: [
            { text: 'Home' },
            { text: 'Banner' },
            { text: 'AboutMe' },
            { text: 'Resume' },
            { text: 'Projects' },
            { text: 'Contact' },
          ],
        })}
    </div>
  </div>
  `;
};
