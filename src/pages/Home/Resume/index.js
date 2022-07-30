import { Tabs } from '../../../components/Tabs';
import { Separator } from '../../../components/Separator';
import { H2 } from '../../../components/H2';
import { mounted } from '../../../utils/mounted';
import { Studies } from '../../../components/Studies';
import { Skills } from '../../../components/Skills';
import { Experiences } from '../../../components/Experiences';

export const Resume = () => {
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
    <div id="resume" class='content-resume'>
      ${H2({ children: 'Habilidades' })}
      ${Separator()}
        ${Tabs({
          tabs: [
            {
              text: 'Estudios',
              className: 'active',
            },
            { text: 'Habilidades' },
            { text: 'Experiencia' },
          ],
          onChange: renderTab,
        })}
      <div id="tab-content"></div>
    </div>
  `;
};
