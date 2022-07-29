import { mounted } from '../../utils/mounted';
import { Experiences } from '../Experiences';
import { Skills } from '../Skills';
import { Studies } from '../Studies';
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
        ${Studies()}
        `;
        break;
      case 1:
        tabContent.innerHTML = /*html*/ `
        ${Skills()}
        `;
        break;
      case 3:
        tabContent.innerHTML = /*html*/ `
        ${Experiences()}
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
