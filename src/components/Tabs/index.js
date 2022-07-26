import { Tab } from '../Tab';
import './index.css';

export const Tabs = ({ className = '', tabs = [], children = '' } = {}) => {
  return /*html*/ `
    <ul class='tabs ${className}'>${tabs
    .map((tab) => Tab({ text: tab.text }))
    .join('')}</ul>
    <div>
      ${children}
    </div>
    `;
};
