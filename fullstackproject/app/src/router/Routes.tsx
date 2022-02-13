import { ReactNode, ComponentType } from 'react';

//views
import Home from 'views/Home';
import Breed from 'views/Breed';
import Dragons from 'views/Dragons';
import Staking from 'views/Staking';
import Merch from 'views/Merch';
import BabyDragons from 'views/BabyDragons';
export interface IRoutes {
  path: string;
  label: string;
  component: ComponentType;
  sideMenu: boolean;
}
export const routes: IRoutes[] = [
  {
    path: '/home',
    label: 'Home',
    component: Home,
    sideMenu: true,
  },
  {
    path: '/breed',
    label: 'Breed',
    component: Breed,
    sideMenu: true,
  },

  {
    path: '/Merch',
    label: 'Merch',
    component: Merch,
    sideMenu: true,
  },
  {
    path: '/Staking',
    label: 'Staking',
    component: Staking,
    sideMenu: true,
  },
  {
    path: '/ehecatldragons',
    label: 'Ehecatl Dragons',
    component: Dragons,
    sideMenu: true,
  },
  {
    path: '/babydragons',
    label: 'Baby Dragons',
    component: BabyDragons,
    sideMenu: true,
  },
];
