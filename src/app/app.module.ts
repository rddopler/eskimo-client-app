import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ManhattanComponent } from './components/home/location/manhattan/manhattan.component';
import { BrooklynComponent } from './components/home/location/brooklyn/brooklyn.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ContactComponent } from './components/contact/contact.component';
import { ALaCarteMenuComponent } from './components/menu/a-la-carte-menu/a-la-carte-menu.component';
import { DessertsComponent } from './components/menu/desserts/desserts.component';
import { PrivateDiningComponent } from './components/private-dining/private-dining.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    ManhattanComponent,
    BrooklynComponent,
    MenuComponent,
    ReservationComponent,
    ContactComponent,
    ALaCarteMenuComponent,
    DessertsComponent,
    PrivateDiningComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
