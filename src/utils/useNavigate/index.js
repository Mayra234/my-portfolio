import { routes } from '../../routes';

export const useNavigate = () => {
  const root = document.getElementById('root');

  //history push
  const navigate = (path) => {
    window.history.pushState(null, '', path);
    render(path);
  };

  const render = (path) => {
    const foundRoute = routes.find((route) => route.path === path);
    root.innerHTML = foundRoute.component();
  };

  //atras y adelante
  window.addEventListener('popstate', () => {
    const pathname = window.location.pathname;
    render(pathname);
  });

  return { navigate };
};
