import { Separator } from '../../../components/Separator';
import { H2 } from '../../../components/H2';
import { Card } from '../../../components/Card';
import './index.css';
import { Icon } from '../../../components/Icon';

export const Contact = () => {
  return /*html*/ `
    <div class='container-contact'>
      <a name='contact'></a>
        ${H2({ className: 'title', children: 'Contacto' })}
        ${Separator()}
        <p class='introduction'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae odio cumque harum laborum dignissimos iste!
        </p>
        <div class="content-cards-contact">
            ${Card({
              className: 'contact-me',
              children: /*html*/ `
            ${Icon({ icon: 'house' })}
            ${H2({ children: 'Teléfono' })}
            <p>
                3122959854
            </p>
            `,
            })}
            ${Card({
              className: 'contact-me',
              children: /*html*/ `
            ${Icon({ icon: 'house' })}
            ${H2({ children: 'Email' })}
            <p>
                alejandradiavanera@gmail.com
            </p>
            `,
            })}
            ${Card({
              className: 'contact-me',
              children: /*html*/ `
            ${Icon({ icon: 'house' })}
            ${H2({ children: 'Redes Sociales' })}
            <div class="social">
                <a class="icon-social" href="">f</a>
                <a class="icon-social" href="">i</a>
                <a class="icon-social" href="">w</a>
            </div>
            `,
            })}
        </div>
    </div>
    `;
};
