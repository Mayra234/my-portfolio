import { Card } from '../Card';
import { Tabs } from './index';

export default {
  title: 'Components/Tabs',
};

export const Overview = () => {
  return /*html*/ `
    <div>
        ${Tabs({
          tabs: [{ text: 'Estudios' }, { text: 'Saberes' }],
          children: /*html*/ `
        <div>
          ${Card({})}
        </div>
        `,
        })}
        
    </div>
    `;
};
