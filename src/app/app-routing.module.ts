import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMePageModule)
  },
  {
    path: 'about-me/more',
    loadChildren: () => import('./about-me/more-about-me/more-about-me.module').then(m => m.MoreAboutMePageModule)
  },
  {
    path: 'psychotherapy',
    loadChildren: () => import('./psychotherapy/psychotherapy.module').then(m => m.PsychotherapyPageModule)
  },
  {
    path: 'psychotherapy/more',
    loadChildren: () => import('./psychotherapy/more-psychotherapy/more-psychotherapy.module').then(m => m.MorePsychotherapyPageModule)
  },
  {
    path: 'psychotherapy/individual',
    loadChildren: () => import('./psychotherapy/individual/individual.module').then(m => m.IndividualPageModule)
  },
  {
    path: 'psychotherapy/couples',
    loadChildren: () => import('./psychotherapy/couples/couples.module').then(m => m.CouplesPageModule)
  },
  {
    path: 'psychotherapy/group',
    loadChildren: () => import('./psychotherapy/group/group.module').then(m => m.GroupPageModule)
  },
  {
    path: 'psychotherapy/healing-exercises',
    loadChildren: () => import('./psychotherapy/healing-exercises/healing-exercises.module').then(m => m.HealingExercisesPageModule)
  },
  {
    path: 'psychotherapy/life-coaching',
    loadChildren: () => import('./psychotherapy/life-coaching/life-coaching.module').then(m => m.LifeCoachingPageModule)
  },
  {
    path: 'psychotherapy/ketamine',
    loadChildren: () => import('./psychotherapy/ketamine/ketamine.module').then( m => m.KetaminePageModule)
  },
  {
    path: 'workshops',
    loadChildren: () => import('./workshops/workshops.module').then(m => m.WorkshopsPageModule)
  },
  {
    path: 'workshops/more',
    loadChildren: () => import('./workshops/more-workshops/more-workshops.module').then(m => m.MoreWorkshopsPageModule)
  },
  {
    path: 'publications-videos',
    loadChildren: () => import('./publications-videos/publications-videos.module').then(m => m.PublicationsVideosPageModule)
  },
  {
    path: 'publications-videos/more',
    loadChildren: () => import('./publications-videos/more-publications-videos/more-publications-videos.module').then(m => m.MorePublicationsVideosPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'the-summit',
    loadChildren: () => import('./the-summit/the-summit.module').then( m => m.TheSummitPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    // RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
