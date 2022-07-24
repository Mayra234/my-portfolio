import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { H3 } from '../../components/H3';
import { H1 } from '../../components/H1';
import { Button } from '../../components/Button';

export const Home = () => {
  return /*html*/ `
  <div class='home'>
    <div class='nav-menu'>
        ${Header({ children: Navbar() })}
    </div>
    <div class='content-home'>
        <div class='welcome-text'>
            <section>
                ${H3({ children: 'Bienvenido a mi sitio web' })}
                ${H1({ children: 'Alejandra Diavanera' })}
                ${Button({ children: 'Contáctame', palette: 'primary' })}
            </section>
        </div>
    </div>
  </div>
  `;
};
