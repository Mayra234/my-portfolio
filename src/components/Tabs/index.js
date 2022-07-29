import { Tab } from '../Tab';
import './index.css';
import { mounted } from '../../utils/mounted';

export const Tabs = ({
  className = '',
  tabs = [],
  onChange = () => {},
} = {}) => {
  let currentTabIndex = 0;

  mounted(() => {
    const contentTabs = document.querySelectorAll('.tab-nav-item');

    contentTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        currentTabIndex = index;
        onChange(index);
      });
    });
  });

  return /*html*/ `
    <div class="content-tabs">
      <ul class='tabs ${className}'>
      ${tabs.map((tab) => Tab({ text: tab.text })).join('')}
      </ul>
    </div>
    `;
};
