"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./Components/Dashboard/dashboard.component');
var heroes_component_1 = require('./Components/Heroes/heroes.component');
var hero_detail_component_1 = require('./Components/HeroDetail/hero-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
];
exports.appRoutingModule = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.module.js.map