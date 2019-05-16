import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'coinpot',
    loadChildren: './coinpot/coinpot.module#CoinpotPageModule'
  },
  {
    path: 'esfaucet',
    loadChildren: './esfaucet/esfaucet.module#EsfaucetPageModule'
  },
  {
    path: 'bitnyx',
    loadChildren: './bitnyx/bitnyx.module#BitnyxPageModule'
  },
  {
    path: 'freebitcoin',
    loadChildren: './freebitcoin/freebitcoin.module#FreebitcoinPageModule'
  },
  {
    path: 'freedogecoin',
    loadChildren: './freedogecoin/freedogecoin.module#FreedogecoinPageModule'
  },
  {
    path: 'free-dogecoin',
    loadChildren: './free-dogecoin/free-dogecoin.module#FreeDogecoinPageModule'
  },
  {
    path: 'free-litecoin',
    loadChildren: './free-litecoin/free-litecoin.module#FreeLitecoinPageModule'
  },
  {
    path: 'faucethub',
    loadChildren: './faucethub/faucethub.module#FaucethubPageModule'
  },
  {
    path: 'lootbits',
    loadChildren: './lootbits/lootbits.module#LootbitsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
