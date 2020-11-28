import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login/:token',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'open',
    loadChildren: () => import('./open/open.module').then( m => m.OpenPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'boxes',
    loadChildren: () => import('./boxes/boxes.module').then( m => m.BoxesPageModule)
  },
  {
    path: 'packets',
    loadChildren: () => import('./packets/packets.module').then( m => m.PacketsPageModule)
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
  {
    path: 'send',
    loadChildren: () => import('./send/send.module').then( m => m.SendPageModule)
  },
  {
    path: 'confirmations',
    loadChildren: () => import('./confirmations/confirmations.module').then( m => m.ConfirmationsPageModule)
  },
  {
    path: 'sent',
    loadChildren: () => import('./sent/sent.module').then( m => m.SentPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
