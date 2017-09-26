import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-list',
  templateUrl: 'postDetail.html'
})
export class DetailPage {

  post: any;
  isNewPost: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams['data']['post'];
    this.isNewPost = navParams['data']['isNewPost'];

    this.post.timestamp = moment(this.post.timestamp).format('MM/DD/YYYY HH:mm');
  }

  getField(name){
  	if (this.isNewPost){
  		return "";
  	}

  	if (this.post[name]){
  		return this.post[name];
  	}else{
  		return "";
  	}
  }

  getTitle(){
  	return this.isNewPost ? "招聘信息" : "工作详情";
  }

  makeAPost(){
  	console.log('Post', this.post);
  }
}
