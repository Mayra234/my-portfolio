import { Avatar } from './index';

export default {
  title: 'Components/Avatar',
};

export const Overview = () => {
  return /*html*/ `
    <div>
        ${Avatar({
          image:
            'https://static2.abc.es/media/play/2020/09/29/avatar-kE4H--1024x512@abc.jpeg',
          mainText: 'Mayra',
          style: 'color: black',
        })}
    </div>
    `;
};
