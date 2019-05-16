import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FreedogecoinPage } from './freedogecoin.page';

const routes: Routes = [
  {
    path: '',
    component: FreedogecoinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FreedogecoinPage]
})
export class FreedogecoinPageModule {}
