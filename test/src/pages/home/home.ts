import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: any;
  num: number
  public productCart : any[]

  constructor(public navCtrl: NavController, public CallApi: CallApiProvider) {

  }

  ionViewDidEnter() {
    this.get();
  }

  get() {
    this.CallApi.GetAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  goCreatePage() {
    console.log("test");
    this.navCtrl.push('CreatePage');
  }

  addToCart() {

  }
}

