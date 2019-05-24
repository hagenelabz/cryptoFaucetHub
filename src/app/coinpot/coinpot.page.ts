import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;
@Component({
  selector: 'app-coinpot',
  templateUrl: './coinpot.page.html',
  styleUrls: ['./coinpot.page.scss'],
})
export class CoinpotPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'https://coinpot.co/dashboard',
        'http://moonbit.co.in/?ref=dfe672222055',
        'http://moonbitcoin.cash/?ref=5E5A7D327106',
        'http://moonliteco.in/?ref=63b9c217f71d',
        'http://moondash.co.in/?ref=72B8CC9A0417',
        'http://moondoge.co.in/?ref=557cb6648e71',
        'http://bonusbitcoin.co/?ref=0CB492010A53',
        'http://bitfun.co/?ref=EDFA9E75A80E'
      ]
    });
  }

  ngOnInit() {
  }
  async openCoinpot() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://coinpot.co/dashboard', windowName: '_self' });
  }
  async openMoonBitcoin() {
    await Browser.open({ toolbarColor: '#df8529', url: 'http://moonbit.co.in/?ref=dfe672222055', windowName: '_self' });
  }
  async openMoonBitcoinCash() {
    await Browser.open({ toolbarColor: '#82ba48', url: 'http://moonbitcoin.cash/?ref=5E5A7D327106', windowName: '_self' });
  }
  async openMoonLitecoin() {
    await Browser.open({ toolbarColor: '#9f9f9f', url: 'http://moonliteco.in/?ref=63b9c217f71d', windowName: '_self' });
  }
  async openMoonDash() {
    await Browser.open({ toolbarColor: '#1a6ab4', url: 'http://moondash.co.in/?ref=72B8CC9A0417', windowName: '_self' });
  }
  async openMoonDoge() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'http://moondoge.co.in/?ref=557cb6648e71', windowName: '_self' });
  }
  async openBonusBitcoin() {
    await Browser.open({ toolbarColor: '#ca474e', url: 'http://bonusbitcoin.co/?ref=0CB492010A53', windowName: '_self' });
  }
  async openBitFun() {
    await Browser.open({ toolbarColor: '#22509e', url: 'http://bitfun.co/?ref=EDFA9E75A80E', windowName: '_self' });
  }

}
