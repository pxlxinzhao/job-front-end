import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'postDetail.html'
})
export class DetailPage {

  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams['data']['post'];

    this.post.timestamp = new Date(this.post.timestamp).toLocaleString();
  }

}
