import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { BioComponent } from './pages/bio/bio.component';
import { MainComponent } from './pages/main/main.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { BioDashboardComponent } from './dashboard/bio-dashboard/bio-dashboard.component';
import { ProjectsDashboardComponent } from './dashboard/projects-dashboard/projects-dashboard.component';
import { MiscDashboardComponent } from './dashboard/misc-dashboard/misc-dashboard.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'dashboard', component: AdminDashboardComponent,
  children: [
    {path: 'home', component: ProjectsDashboardComponent},
    {path: 'bio', component: BioDashboardComponent},
    {path: 'misc', component: MiscDashboardComponent},
    // {path: 'fonds-de-credit-multi-emprunteurs', component: FondsMultiEmprunteursComponent},
    // {path: 'garantie-et-pret-ifcic', component: GarantieEtPretIfcicComponent},
    // {path: 'panorama-des-marches-financiers', component: MarchesFinanciersComponent},
    // {path: 'fonds-de-capital-investissement', component: CapitalInvestissementComponent},
    // {path: 'fonds-ou-dispositifs-specifiques-au-secteur', component: FondsBoisComponent},
    // {path: 'business-angels', component: BusinessAngelsComponent},
    // {path: 'les-aides', component: AidesComponent},
  ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
