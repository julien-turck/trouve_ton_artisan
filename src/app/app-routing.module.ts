import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CookiesComponent } from './cookies/cookies.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { ErrorComponent } from './error/error.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ArtisansListeComponent } from './artisans-liste/artisans-liste.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "artisans", component: ArtisansListeComponent},
  {path: "formulaire", component: FormulaireComponent},
  {path: "cookies", component: CookiesComponent},
  {path: "donneesPersonnelles", component: DonneesPersonnellesComponent},
  {path: "mentionsLegales", component: MentionsLegalesComponent},
  {path: "accessibilite", component: AccessibiliteComponent},
  {path: "**", pathMatch: "full", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
