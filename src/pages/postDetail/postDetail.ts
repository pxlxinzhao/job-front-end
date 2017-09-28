import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-list',
  templateUrl: 'postDetail.html',
})export class DetailPage {

  post: any;
  isNewPost: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams['data']['post'];
    this.isNewPost = navParams['data']['isNewPost'];

    if (this.isNewPost){
      this.post.isagent = false;
    }

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

    var postData = {};

    postData["address"] = this.post.address;
    postData["category"] = this.post.category;
    postData["city"] = this.post.city;
    postData["details"] = this.post.details;
    postData["email"] = this.post.email;
    postData["isagent"] = this.post.isagent;
    postData["phone"] = this.post.phone;
    postData["phone2"] = this.post.phone2;
    postData["postby"] = this.post.postby;
    postData["requirement"] = this.post.requirement;
    postData["salary"] = this.post.salary;
    postData["timestamp"] = moment(this.post.timestamp).valueOf();
    postData["title"] = this.post.title;

    if (!postData['postby']){
      console.error('postby is a must');
    }else if(!postData['timestamp'] || isNaN(postData['timestamp'])){
      console.error('datatime format is wrong');
    }else{
      console.log('PostDat', postData);
    }


  }

  deleteAPost(){
    const id = this.post.id;
  }
}
