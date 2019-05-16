import { Component, Pipe, PipeTransform } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Pipe({
  name: 'orderby'
})
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements PipeTransform {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      // icon: 'home'
    },
    {
      title: 'Coinpot',
      url: '/coinpot',
      // icon: 'logo-bitcoin'
    },
    {
      title: 'ES Faucet',
      url: '/esfaucet',
      // icon: 'logo-bitcoin'
    },
    {
      title: 'Bitnyx',
      url: '/bitnyx',
      // icon: 'logo-bitcoin'
    }
    ,
    {
      title: 'Free-Dogecoin',
      url: '/free-dogecoin',
      // icon: 'logo-bitcoin'
    },
    {
      title: 'Free-Litecoin',
      url: '/free-litecoin',
      // icon: 'logo-bitcoin'
    },
    {
      title: 'FreeBitcoin',
      url: '/freebitcoin',
      // icon: 'logo-bitcoin'
    },
    {
      title: 'FreeDogecoin',
      url: '/freedogecoin',
      // icon: 'logo-bitcoin'
    },
    {
      title: 'Faucet Hub',
      url: '/faucethub',
      // icon: 'logo-bitcoin'
    },
    {
      title: 'Lootbits',
      url: '/lootbits',
      // icon: 'logo-bitcoin'
    }
  ];
  order = 'url';
  ascending = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  transform(array: Array<any>, args?) {

    // Check if array exists, in this case array contains articles and args is an array that has 1 element : !id

    if (array) {

      // get the first element

      let orderByValue = args[0]
      let byVal = 1

      // check if exclamation point

      if (orderByValue.charAt(0) === '!') {

        // reverse the array

        byVal = -1
        orderByValue = orderByValue.substring(1)
      }
      console.log('byVal', byVal);
      console.log('orderByValue', orderByValue);

      array.sort((a: any, b: any) => {
        if (a[orderByValue] < b[orderByValue]) {
          return -1 * byVal;
        } else if (a[orderByValue] > b[orderByValue]) {
          return 1 * byVal;
        } else {
          return 0;
        }
      });
      return array;
    }
    //
  }
}
