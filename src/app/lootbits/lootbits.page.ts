import { Component, OnInit } from '@angular/core'; import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-lootbits',
  templateUrl: './lootbits.page.html',
  styleUrls: ['./lootbits.page.scss'],
})
export class LootbitsPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'https://lootbits.io/?invite=885761'
      ]
    });
  }

  async openLootbits() {
    await Browser.open({ toolbarColor: '#474875', url: 'https://lootbits.io/?invite=885761' });
  }

  ngOnInit() {
  }

}
