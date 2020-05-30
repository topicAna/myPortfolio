import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TitleComponent } from './components/title/title.component';
import { BioComponent } from './pages/bio/bio.component';

// Angular material imports
// ***

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    TitleComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
