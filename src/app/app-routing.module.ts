import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CookiesComponent } from './cookies/cookies.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { ErrorComponent } from './error/error.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { BatimentComponent } from './batiment/batiment.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { ServicesComponent } from './services/services.component';
import { SingleArtisanComponent } from './single-artisan/single-artisan.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'artisans/:idAuto', component: SingleArtisanComponent },
  { path: 'artisans/:idAuto/Alimentation', component: AlimentationComponent },
  { path: 'artisans/:idAuto/Bâtiment', component: BatimentComponent },
  { path: 'artisans/:idAuto/Fabrication', component: FabricationComponent },
  { path: 'artisans/:idAuto/Services', component: ServicesComponent },
  { path: 'alimentation', component: AlimentationComponent },
  { path: 'batiment', component: BatimentComponent },
  { path: 'fabrication', component: FabricationComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'donneesPersonnelles', component: DonneesPersonnellesComponent },
  { path: 'mentionsLegales', component: MentionsLegalesComponent },
  { path: 'accessibilite', component: AccessibiliteComponent },
  { path: '**', pathMatch: 'full', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
