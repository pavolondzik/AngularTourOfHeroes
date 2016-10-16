import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { HeroesComponent }    from './Components/Heroes/heroes.component';
import { HeroDetailComponent }    from './Components/HeroDetail/hero-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);