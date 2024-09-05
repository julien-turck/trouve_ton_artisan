import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ErrorComponent } from './error/error.component';
import { ArtisansPageComponent } from './artisans-page/artisans-page.component';
import { ArtisansListeComponent } from './artisans-liste/artisans-liste.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { SingleArtisanComponent } from './single-artisan/single-artisan.component';
import { NgArrayPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    MentionsLegalesComponent,
    DonneesPersonnellesComponent,
    AccessibiliteComponent,
    CookiesComponent,
    FormulaireComponent,
    ErrorComponent,
    ArtisansPageComponent,
    ArtisansListeComponent,
    BatimentComponent,
    ServicesComponent,
    AlimentationComponent,
    FabricationComponent,
    SingleArtisanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgArrayPipesModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
