import { Tabs } from '../../../components/Tabs';
import { Separator } from '../../../components/Separator';
import { H2 } from '../../../components/H2';
import { mounted } from '../../../utils/mounted';
import { Studies } from '../../../components/Studies';
import { Skills } from '../../../components/Skills';
import { Experiences } from '../../../components/Experiences';

export const Flags = () => {
  let tabContent;

  const renderTab = (index) => {
    switch (index) {
      case 0:
        tabContent.innerHTML = /*html*/ `${Studies()}`;
        break;
      case 1:
        tabContent.innerHTML = /*html*/ `${Skills()}`;
        break;
      case 2:
        tabContent.innerHTML = /*html*/ `${Experiences()}`;
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
    <a name='skills'></a>
    <div class='content-flags'>
      ${H2({ children: 'Habilidades' })}
      ${Separator()}
        ${Tabs({
          tabs: [
            { text: 'Estudios' },
            { text: 'Habilidades' },
            { text: 'Experiencia' },
          ],
          onChange: renderTab,
        })}
      <div id="tab-content"></div>
    </div>
  `;
};
