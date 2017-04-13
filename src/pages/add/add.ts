import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the Add page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})


export class Add {
  @ViewChild(Navbar) navBar: Navbar;

  title: string;
  note: string;
  payload: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public platfm: Platform, public toastCtrl: ToastController) {

    this.platfm.registerBackButtonAction(() => {
      this.saveNow();

    }, 0);

  }

  ionViewDidLoad() {
     
    this.navBar.backButtonClick = () => {
      this.saveNow();
    }
  }

  saveNow() {

    this.payload = {
      title: this.title,
     note: this.note,
      task: "add",
    }
 
    this.navCtrl.push(HomePage, this.payload);

  }


}
