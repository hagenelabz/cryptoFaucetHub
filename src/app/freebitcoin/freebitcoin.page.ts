import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-freebitcoin',
  templateUrl: './freebitcoin.page.html',
  styleUrls: ['./freebitcoin.page.scss'],
})
export class FreebitcoinPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'https://freebitco.in/?r=19431894'
      ]
    });
  }

  async openBitcoin() {
    await Browser.open({ toolbarColor: '#f79129', url: 'https://freebitco.in/?r=19431894' });
  }

  ngOnInit() {
  }

}
