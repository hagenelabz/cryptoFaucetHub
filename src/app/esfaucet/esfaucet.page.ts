import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-esfaucet',
  templateUrl: './esfaucet.page.html',
  styleUrls: ['./esfaucet.page.scss'],
})
export class EsfaucetPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'https://es.btcnewz.com/auth/register?ref=4491875fc8844807e7a7',
        'https://es.btcnewz.com/user/faucet/2',
        'https://es.btcnewz.com/user/faucet/3',
        'https://es.btcnewz.com/user/faucet/4',
        'https://es.btcnewz.com/user/faucet/6',
        'https://es.btcnewz.com/user/faucet/7',
        'https://es.btcnewz.com/user/faucet/8',
        'https://es.btcnewz.com/user/faucet/11',
        'https://es.btcnewz.com/user/faucet/12',
        'https://es.btcnewz.com/user/faucet/13',
        'https://es.btcnewz.com/user/faucet/15',
        'https://es.btcnewz.com/user/faucet/16',
        'https://es.btcnewz.com/user/faucet/18'
      ]
    });
   }

  ngOnInit() {
  }
  async openBtcNewz() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://es.btcnewz.com/auth/register?ref=4491875fc8844807e7a7' });
  }
  async openFaucetEsCoin() {
    await Browser.open({ toolbarColor: '#d6393a', url: 'https://es.btcnewz.com/user/faucet/2' });
  }
  async openFaucetBitcoin() {
    await Browser.open({ toolbarColor: '#f78e24', url: 'https://es.btcnewz.com/user/faucet/3' });
  }
  async openFaucetEthereum() {
    await Browser.open({ toolbarColor: '#141414', url: 'https://es.btcnewz.com/user/faucet/4' });
  }
  async openFaucetLitecoin() {
    await Browser.open({ toolbarColor: '#2d5392', url: 'https://es.btcnewz.com/user/faucet/6' });
  }
  async openFaucetRipple() {
    await Browser.open({ toolbarColor: '#f16565', url: 'https://es.btcnewz.com/user/faucet/7' });
  }
  async openFaucetStellar() {
    await Browser.open({ toolbarColor: '#f16565', url: 'https://es.btcnewz.com/user/faucet/8' });
  }
  async openFaucetDigibyte() {
    await Browser.open({ toolbarColor: '#042148', url: 'https://es.btcnewz.com/user/faucet/11' });
  }
  async openFaucetDogecoin() {
    await Browser.open({ toolbarColor: '#b2942d', url: 'https://es.btcnewz.com/user/faucet/12' });
  }
  async openFaucetBasicAttentionToken() {
    await Browser.open({ toolbarColor: '#941c58', url: 'https://es.btcnewz.com/user/faucet/13' });
  }
  async openFaucetBitcoinCash() {
    await Browser.open({ toolbarColor: '#ee7f16', url: 'https://es.btcnewz.com/user/faucet/15' });
  }
  async openFaucetEthereumClassic() {
    await Browser.open({ toolbarColor: '#02943a', url: 'https://es.btcnewz.com/user/faucet/16' });
  }
  async openFaucet0x() {
    await Browser.open({ toolbarColor: '#1b1f23', url: 'https://es.btcnewz.com/user/faucet/18' });
  }
}
