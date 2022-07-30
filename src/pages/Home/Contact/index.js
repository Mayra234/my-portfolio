import './index.css';
import { Separator } from '../../../components/Separator';
import { H2 } from '../../../components/H2';
import { ContactCard } from '../../../components/ContactCard';

export const Contact = () => {
  return /*html*/ `
    <div id="contact" class='container-contact'>
        ${H2({ className: 'title', children: 'Contacto' })}
        ${Separator()}
        <p class='introduction'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae odio cumque harum laborum dignissimos iste!
        </p>
        <div class="content-cards-contact">
            ${ContactCard({
              title: 'Teléfono',
              children: '3126098992',
            })}
            ${ContactCard({
              title: 'Email',
              children: 'alejandradiavanera@gmail.com',
            })}
            ${ContactCard({
              title: 'LinkedIn',
              children: /*html*/ `
              <a href="www.linkedin.com/in/alejandra-diavanera-3ab035231"></a>
              `,
            })}
        </div>
    </div>
    `;
};
