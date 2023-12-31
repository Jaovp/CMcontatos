import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/contatos/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'singin',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./view/contatos/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'detalhar',
    loadChildren: () => import('./view/contatos/detalhar/detalhar.module').then( m => m.DetalharPageModule)
  },
  {
    path: 'singin',
    loadChildren: () => import('./view/usuarios/singin/singin.module').then( m => m.SinginPageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./view/usuarios/singup/singup.module').then( m => m.SingupPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
