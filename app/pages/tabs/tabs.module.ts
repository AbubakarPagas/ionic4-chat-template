import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
     { path: 'notifications', loadChildren: '../notifications/notifications.module#NotificationsPageModule' },
     { path: 'message', loadChildren: '../message/message.module#MessagePageModule' },
     { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
    ]
  },
  {
    path: '',
    redirectTo:'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
