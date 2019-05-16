import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FreeDogecoinPage } from './free-dogecoin.page';

const routes: Routes = [
  {
    path: '',
    component: FreeDogecoinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FreeDogecoinPage]
})
export class FreeDogecoinPageModule {}
