import Decision from 'routes/Decision';
import Dispose from 'routes/Dispose';
import Home from 'routes/Home';
import Infoctl from 'routes/Infoctl';
import Monitor from 'routes/Monitor';
import Serve from 'routes/Serve';
import System from 'routes/System';

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/monitor',
    component: Monitor,
  },
  {
    path: '/dispose',
    component: Dispose,
  },
  {
    path: '/infoctl',
    component: Infoctl,
  },
  {
    path: '/serve',
    component: Serve,
  },
  {
    path: '/decision',
    component: Decision,
  },
  {
    path: '/system',
    component: System,
  },
]

export default routes;
