import './index.css';
import { H2 } from '../../../components/H2';
import { H3 } from '../../../components/H3';

export const AboutMe = () => {
  return /*html*/ `
    <div class='container-about'>
      
        <div class='image-about-me'>
          <a name='about-me'></a>
        </div>
        <div class='text-about'>
          ${H2({ children: 'Mayra Diavanera', className: 'text-about-h2' })}
          ${H3({ children: 'Web Developer', className: 'text-about-h3' })}
          <p class='p'>
            Web Developer with 5+ years of experience in designing and developing user interfaces,
             testing, debugging and tracing staff within e-commerce technologies. 
             Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies. 
            </p>
        </div>
    </div>
    `;
};
