import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'menu',
    loadComponent: () => import('./shared/components/menu/menu.component').then(x => x.MenuComponent)
}, {
    path: 'icecream',
    loadComponent: () => import('./shared/components/icecream/icecream.component').then(x => x.IcecreamComponent)
}, {
    path: 'personalize',
    loadComponent: () => import('./shared/components/personalize/personalize.component').then(x => x.PersonalizeComponent)
}];
