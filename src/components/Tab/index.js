import './index.css';
import { mounted } from '../../utils/mounted';

export const Tab = ({ id = '', className = '', text = '' } = {}) => {
  mounted(() => {
    const tabs = document.querySelectorAll('.tab-nav-link');
    const contentTabs = document.querySelectorAll('.tab-nav-item');
    contentTabs.forEach((tab, i) => {
      contentTabs[i].addEventListener('click', () => {
        contentTabs.forEach((tab, i) => {
          contentTabs[i].classList.remove('active');
          tabs[i].classList.remove('active');
        });
        contentTabs[i].classList.add('active');
        tabs[i].classList.add('active');
      });
    });
  });

  return /*html*/ `
  <div class="container-tab">
    <li id='${id}' class='tab-nav-item '>
        <a class="tab-nav-link ${className}">${text}</a>
    </li>
  </div>
    `;
};
