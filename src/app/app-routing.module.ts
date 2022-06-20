import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ManhattanComponent} from "./components/home/location/manhattan/manhattan.component";
import {BrooklynComponent} from "./components/home/location/brooklyn/brooklyn.component";
import {MenuComponent} from "./components/menu/menu.component";
import {ReservationComponent} from "./components/reservation/reservation.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'manhattan', component: ManhattanComponent },
  { path: 'brooklyn', component: BrooklynComponent },
  { path: 'menus', component: MenuComponent },
  { path: 'reservation', component: ReservationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
