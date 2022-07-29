import { mounted } from '../../utils/mounted';
import { Card } from '../Card';
import { Tabs } from './index';

export default {
  title: 'Components/Tabs',
};

export const Overview = () => {
  let tabContent;

  const renderTab = (index) => {
    switch (index) {
      case 0:
        tabContent.innerHTML = /*html*/ `
        <div>Content tab 1</div>
        `;
        break;
      case 1:
        tabContent.innerHTML = /*html*/ `
        <div>Content tab 2</div>
        `;
        break;
      default:
        return '';
    }
  };

  mounted(() => {
    tabContent = document.getElementById('tab-content');
    renderTab(0);
  });

  return /*html*/ `
        ${Tabs({
          tabs: [{ text: 'Estudios' }, { text: 'Saberes' }],
          onChange: renderTab,
        })}
      <div id="tab-content"></div>
    `;
};
