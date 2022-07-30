import { AboutMe } from './AboutMe';
import { Banner } from './Banner';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Resume } from './Resume';

export const Home = () => {
  return /*html*/ `
      ${Banner()}
      ${AboutMe()}
      ${Resume()}
      ${Projects()}
      ${Contact()}
  `;
};
