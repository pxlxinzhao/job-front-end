import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-list',
  templateUrl: 'postDetail.html'
})
export class DetailPage {

  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams['data']['post'];

    this.post.timestamp = moment(this.post.timestamp).format('MM/DD/YYYY HH:mm');
  }

  getSalary(){
  	return this.post.salary == 0 ?　'面议' : this.post.salary
  }

  getRequirement(){
  	return !this.post.requirement ?　'不详' : this.post.requirement
  }

}
