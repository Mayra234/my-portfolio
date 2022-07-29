import { AboutMe } from './AboutMe';
import { Banner } from './Banner';
import { Flags } from './Flags';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const Home = () => {
  return /*html*/ `
      ${Banner()}
      ${AboutMe()}
      ${Flags()}
      ${Projects()}
      ${Contact()}
  `;
};
