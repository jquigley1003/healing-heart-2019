import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'about-me',
    loadChildren: './about-me/about-me.module#AboutMePageModule'
  },
  {
    path: 'more-about-me',
    loadChildren: './about-me/more-about-me/more-about-me.module#MoreAboutMePageModule'
  },
  { path: 'psychotherapy', loadChildren: './psychotherapy/psychotherapy.module#PsychotherapyPageModule' },
  { path: 'more-psychotherapy', loadChildren: './psychotherapy/more-psychotherapy/more-psychotherapy.module#MorePsychotherapyPageModule' },
  { path: 'psychotherapy/individual', loadChildren: './psychotherapy/individual/individual.module#IndividualPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
