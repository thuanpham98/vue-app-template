import {createRouter,createWebHistory} from 'vue-router';
import { NalinkPath } from '@/services/router-config';
import { routerIntercepterBefore } from './services/router-intercepter';
const Home = () => import("@/pages/home/HomePage.vue");
const Setting = () => import("@/pages/setting/SettingPage.vue");
const DashBoard = () => import("@/pages/dashboard/DashBoardPage.vue");


const appRouter = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: NalinkPath.root,
      component: Home,
      children: [
        {
          path: "/dashboard",
          component: DashBoard,
        },
      ],
    },
    {
      path: NalinkPath.setting,
      component: Setting,
    },
  ],
});

appRouter.beforeEach(async (to, from, next) => {
  routerIntercepterBefore({
    to: to,
    from: from,
    next: next,
  });
});

export default appRouter;
