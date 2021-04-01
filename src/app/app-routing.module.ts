import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'chrono',
    pathMatch: 'full'
  },
  /*{
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then( m => m.FirstPagePageModule)
  },*/
  {
    path: 'first-page/:id',
    loadChildren: () => import('./first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'chrono',
    loadChildren: () => import('./chrono/chrono.module').then( m => m.ChronoPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
