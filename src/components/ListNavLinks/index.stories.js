import { ListNavLinks } from './index';

export default {
  title: 'Components/ListNavLinks',
};

export const Overview = () => {
  return /*html*/ `
    <div>
        ${ListNavLinks({
          links: [
            { text: 'Home', route: 'https://www.google.com' },
            { text: 'About', route: 'https://www.google.com' },
            { text: 'Services', route: 'https://www.google.com' },
          ],
        })}
    </div>
    `;
};
