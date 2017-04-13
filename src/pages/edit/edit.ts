import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the Edit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})

export class Edit {
@ViewChild(Navbar) navBar: Navbar;

  title: string;
  note: string;
  id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platfm:Platform) {

   this.platfm.registerBackButtonAction(() => {
      this.updateNow();

    }, 0);

 
    
    this.id= this.navParams.get("id"),
    this.title = this.navParams.get("title");
    this.note = this.navParams.get("note");
  }


ionViewDidLoad() {     
    this.navBar.backButtonClick = () => {
      this.updateNow();
    }
  }

  updateNow (){
   let obj = {
      id: this.id,
      title: this.title,
      note: this.note,
      task: "update"
    }

    this.navCtrl.push(HomePage,obj);
  }

}
