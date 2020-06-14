import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { BioComponent } from './pages/bio/bio.component';
import { MainComponent } from './pages/main/main.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'dashboard', component: AdminDashboardComponent, pathMatch: 'full',

    children: [
      // {path: 'admin-doc', component: AdminDocComponent},
      // {path: 'home', component: DashboardComponent},
      // {path: 'informations', component: DashboardInformationsComponent},
      // {path: 'products', component: DashboardProductsComponent},
      // {path: 'documents', component: DashboardDocumentsComponent},
      // {path: 'request', component: DashboardRequestComponent},
      // {path: 'account', component: DashboardAccountComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
