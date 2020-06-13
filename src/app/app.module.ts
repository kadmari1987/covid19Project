import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Covid19Component } from './covid19/covid19.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';
import { MesuresDePrecautionComponent } from './mesures-de-precaution/mesures-de-precaution.component';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropagationComponent } from './propagation/propagation.component';
import { BelgiqueMarocComponent } from './belgique-maroc/belgique-maroc.component';


const routes: Routes = [
  { path: 'covid19', component: Covid19Component },
  { path: 'mesures-de-precaution', component: MesuresDePrecautionComponent },
  { path: 'propqgation', component: PropagationComponent },
  { path: 'sensibilisation', component: SensibilisationComponent },
  { path: 'home', component: HomeComponent},
  { path: 'belgique-maroc', component:BelgiqueMarocComponent},

  { path: '', redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    Covid19Component,
    SensibilisationComponent,
    MesuresDePrecautionComponent,

    HomeComponent,

    PropagationComponent,

    BelgiqueMarocComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
