import './index.css';
import { H3 } from '../../../components/H3';
import { H1 } from '../../../components/H1';
import { Button } from '../../../components/Button';

export const Banner = () => {
  return /*html*/ `
    <div id="banner" class='content-banner'>
      <div class='banner'>
        <div class='welcome-text'>
            <section>
                ${H3({
                  className: 'text-h3',
                  children: 'Bienvenido a mi sitio web',
                })}
                ${H1({ className: 'text-h1', children: 'Alejandra Diavanera' })}
                ${Button({ children: 'Contáctame', palette: 'primary' })}
            </section>
        </div>
      </div>
    </div>
    `;
};
