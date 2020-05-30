import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { BioComponent } from './pages/bio/bio.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'bio', component: BioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
