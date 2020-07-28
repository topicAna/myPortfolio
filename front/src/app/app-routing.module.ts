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
  ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
