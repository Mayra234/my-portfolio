import { Home } from '../pages/Home';
import { MainLayout } from '../layouts/MainLayout';

export const routes = [
  {
    path: '/home',
    component: () => MainLayout({ children: Home() }),
  },
];
