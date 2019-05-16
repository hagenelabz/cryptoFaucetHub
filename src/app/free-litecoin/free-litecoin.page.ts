import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-free-litecoin',
  templateUrl: './free-litecoin.page.html',
  styleUrls: ['./free-litecoin.page.scss'],
})
export class FreeLitecoinPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'https://free-litecoin.com/login?referer=316665'
      ]
    });
  }

  async openLitecoin() {
    await Browser.open({ toolbarColor: '#2d5392', url: 'https://free-litecoin.com/login?referer=316665' });
  }

  ngOnInit() {
  }

}
