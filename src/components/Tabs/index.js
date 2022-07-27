import { Tab } from '../Tab';
import './index.css';

export const Tabs = ({ className = '', tabs = [], children = '' } = {}) => {
  return /*html*/ `
    <div class="content-tabs">
      <ul class='tabs ${className}'>
      ${tabs.map((tab) => Tab({ text: tab.text })).join('')}
      </ul>
      <div class='body-tab'>
        ${children}
      </div>
    <div>
    `;
};
