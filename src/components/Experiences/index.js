import { Card } from '../Card';
import { H1 } from '../H1';
import { H3 } from '../H3';
import './index.css';

export const Experiences = () => {
  return /*html*/ `
    ${Card({
      palette: 'primary',
      children: /*html*/ `
        <div class='title-card'>
        ${H1({
          children: 'Paymentez SAS',
        })}
        ${H3({ children: 'Aprendiz Sena' })}
        </div>
        <p class="information">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
        </p>
      `,
    })}
  `;
};
