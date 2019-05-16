import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-freedogecoin',
  templateUrl: './freedogecoin.page.html',
  styleUrls: ['./freedogecoin.page.scss'],
})
export class FreedogecoinPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'http://freedoge.co.in/?r=4096609'
      ]
    });
  }
  async openFreeDogeCoin() {
    await Browser.open({ toolbarColor: '#b2942d', url: 'http://freedoge.co.in/?r=4096609' });
  }

  ngOnInit() {
  }

}
