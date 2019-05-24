import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-bitnyx',
  templateUrl: './bitnyx.page.html',
  styleUrls: ['./bitnyx.page.scss'],
})
export class BitnyxPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'https://bitnyx.com/?r=162842',
        'https://bitnyx.com/?r=162842'
      ]
    });
  }

  async openBitnyx() {
    await Browser.open({ toolbarColor: '#41b883', url: 'https://bitnyx.com/?r=162842', windowName: '_self' });
  }
  async openBitnyxDashboard() {
    await Browser.open({ toolbarColor: '#41b883', url: 'https://bitnyx.com/?r=162842', windowName: '_self' });
  }
  ngOnInit() {
  }
}
