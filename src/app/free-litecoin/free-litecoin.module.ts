import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FreeLitecoinPage } from './free-litecoin.page';

const routes: Routes = [
  {
    path: '',
    component: FreeLitecoinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FreeLitecoinPage]
})
export class FreeLitecoinPageModule {}
