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
    path: 'about-me/more',
    loadChildren: './about-me/more-about-me/more-about-me.module#MoreAboutMePageModule'
  },
  { path: 'psychotherapy', loadChildren: './psychotherapy/psychotherapy.module#PsychotherapyPageModule' },
  { path: 'psychotherapy/more', loadChildren: './psychotherapy/more-psychotherapy/more-psychotherapy.module#MorePsychotherapyPageModule' },
  { path: 'psychotherapy/individual', loadChildren: './psychotherapy/individual/individual.module#IndividualPageModule' },
  { path: 'psychotherapy/couples', loadChildren: './psychotherapy/couples/couples.module#CouplesPageModule' },
  { path: 'psychotherapy/group', loadChildren: './psychotherapy/group/group.module#GroupPageModule' },
  { path: 'psychotherapy/healing-exercises', loadChildren: './psychotherapy/healing-exercises/healing-exercises.module#HealingExercisesPageModule' },
  { path: 'psychotherapy/life-coaching', loadChildren: './psychotherapy/life-coaching/life-coaching.module#LifeCoachingPageModule' },
  { path: 'workshops', loadChildren: './workshops/workshops.module#WorkshopsPageModule' },
  { path: 'workshops/more', loadChildren: './workshops/more-workshops/more-workshops.module#MoreWorkshopsPageModule' },
  { path: 'publications-videos', loadChildren: './publications-videos/publications-videos.module#PublicationsVideosPageModule' },
  { path: 'publications-videos/more', loadChildren: './publications-videos/more-publications-videos/more-publications-videos.module#MorePublicationsVideosPageModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
