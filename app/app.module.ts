import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { AboutComponent } from './components/about/about.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ThermometerComponent } from './components/thermometer/thermometer.component';
import { HandtrackerComponent } from './handtracker/handtracker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CarouselCardComponent,
    ArtistPageComponent,
    AlbumPageComponent,
    TrackPageComponent,
    TrackListComponent,
    CarouselComponent,
    SearchComponent,
    HomePageComponent,
    ThermometerComponent,
    HandtrackerComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
