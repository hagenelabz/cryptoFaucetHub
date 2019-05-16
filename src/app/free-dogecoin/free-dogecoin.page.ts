import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;


@Component({
  selector: 'app-free-dogecoin',
  templateUrl: './free-dogecoin.page.html',
  styleUrls: ['./free-dogecoin.page.scss'],
})
export class FreeDogecoinPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'https://free-dogecoin.com/?referer=28866'
      ]
    });
  }

  async openFreeDogeCoin() {
    await Browser.open({ toolbarColor: '#b2942d', url: 'https://free-dogecoin.com/?referer=28866' });
  }

  ngOnInit() {
  }

}
