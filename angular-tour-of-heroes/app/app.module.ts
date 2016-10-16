import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './Services/in-memory-data.service';

import { AppComponent }   from './Components/App/app.component';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { HeroesComponent }   from './Components/Heroes/heroes.component';
import { HeroDetailComponent } from './Components/HeroDetail/hero-detail.component';
import { HeroSearchComponent } from './Components/HeroSearch/hero-search.component';

import { HeroService } from './Services/hero.service';
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
        HeroDetailComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
