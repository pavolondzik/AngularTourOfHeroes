﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent }   from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';
import { appRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
