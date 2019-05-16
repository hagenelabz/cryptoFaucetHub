import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class FaucetsService {
  async(openBitnyx: () => Promise<void>): any {
    throw new Error('Method not implemented.');
  }

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls: [
        'https://es.btcnewz.com/user/home',
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
        'https://es.btcnewz.com/user/faucet/18',
        'https://bitnyx.com/'
      ]
    });
  }

  async openBitnyx() {
    await Browser.open({ toolbarColor: '#f4dc41', url: 'https://bitnyx.com/' });
  }
}
