import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-faucethub',
  templateUrl: './faucethub.page.html',
  styleUrls: ['./faucethub.page.scss'],
})
export class FaucethubPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'http://faucethub.io/r/60457612',
        'https://faucethub.io/faucets/BTC',
        'https://faucethub.io/faucets/ETH',
        'https://faucethub.io/faucets/XMR',
        'https://faucethub.io/faucets/LTC',
        'https://faucethub.io/faucets/DOGE',
        'https://faucethub.io/faucets/BCH',
        'https://faucethub.io/faucets/ZEC',
        'https://faucethub.io/faucets/DGB',
        'https://faucethub.io/faucets/BTX',
        'https://faucethub.io/faucets/BLK',
        'https://faucethub.io/faucets/DASH',
        'https://faucethub.io/faucets/PPC',
        'https://faucethub.io/faucets/XPM',
        'https://faucethub.io/faucets/POT'
      ]
    });
  }

  ngOnInit() {
  }

  async openFaucetHub() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'http://faucethub.io/r/60457612' });
  }
  async openFaucetHubBTC() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/BTC' });
  }
  async openFaucetHubETH() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/ETH' });
  }
  async openFaucetHubXMR() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/XMR' });
  }
  async openFaucetHubLTC() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/LTC' });
  }
  async openFaucetHubDODGE() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/DOGE' });
  }
  async openFaucetHubBCH() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/BCH' });
  }
  async openFaucetHubZEC() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/ZEC' });
  }
  async openFaucetHubDGB() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/DGB' });
  }
  async openFaucetHubBTX() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/BTX' });
  }
  async openFaucetHubBLK() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/BLK' });
  }
  async openFaucetHubDASH() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/DASH' });
  }
  async openFaucetHubPPC() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/PPC' });
  }
  async openFaucetHubXPM() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/XPM' });
  }
  async openFaucetHubPOT() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/POT' });
  }
}
