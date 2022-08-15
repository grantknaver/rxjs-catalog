import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transformation', loadChildren: () => import('./modules/transformation/transformation.module').then(m => m.TransformationModule)  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
