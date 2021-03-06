import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailPage } from '../postDetail/postDetail';
import * as moment from 'moment';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  posts: Array<{
    id: number,
    postby: string,
    timestamp: number,
    title: string,
    details: string,
    category: string,
    salary: string,
    email: string,
    phone: string,
    phone2: string,
    address: string,
    city: string,
    state: string,
    country: string,
    isagent: boolean,
    requirment: string}
    >;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public http: Http) {

     // this.http.get('https://job-java.herokuapp.com/posts/list').map(res => res.json()).subscribe(data => {
    this.http.get('http://localhost:8080/job/posts/list').map(res => res.json()).subscribe(data => {
      this.posts = data
    });
  }

  itemTapped(event, post) {
    this.navCtrl.push(DetailPage, {
      post: post,
      isNewPost: false
    });
  }

  newPost(){
    this.navCtrl.push(DetailPage, {
      post: {},
      isNewPost: true
    });
  }

  getTimeDiff(timestamp){
    const now = moment();
    return now.diff(moment(timestamp));
  }
}
