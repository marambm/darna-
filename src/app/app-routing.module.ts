import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { CvbComponent } from './cvb/cvb.component';  // Attention à la casse !!
import { CiComponent } from './ci/ci.component';  
import { CyComponent } from './cy/cy.component';   
import { MiComponent } from './mi/mi.component'; // Respecte la majuscule ici aussi

const routes: Routes = [
  { path: '', redirectTo: 'services', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent },
  { path: 'agent', component: CvbComponent },
  { path: 'ci', component: CiComponent },
  { path: 'cy', component: CyComponent },
  { path: 'mi', component: MiComponent },  // <-- Ici on charge le composant
  { path: '**', redirectTo: 'services' }  // Toujours en dernier
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
