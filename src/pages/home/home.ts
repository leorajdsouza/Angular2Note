import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

import { Add } from '../add/add';
import { Edit } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any[];
  search: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public params: NavParams) {

    this.initialize();

  }

  ionViewDidLoad() { 

    if (this.params.get("task") != undefined) {
      if (this.params.get("task") == "update") {
        //this.items.push({ id: this.params.get("id"), title: this.params.get("title"), note: this.params.get("note") });
        // console.log({ id: this.params.get("id"), title: this.params.get("title"), note: this.params.get("note") });
        console.log("deleting ",this.params.get("id"));
        let obj= { id: this.params.get("id"), title: this.params.get("title"), note: this.params.get("note") };
        console.log(obj);

        this.items.splice(this.params.get("id"), 1, obj)
        console.log(this.items);
        this.updateLocalData(this.items);   
      } else if(this.params.get("task") == "add") {       
        this.items.push({ id: 0, title: this.params.get("title"), note: this.params.get("note") });
        this.updateLocalData(this.items);
      }
    }

  }

  getNotes(evnt: any) {
    this.initialize();

    let val = evnt.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((data) => {
        return (data.title.indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  addNow() {
    this.navCtrl.push(Add);
  }

  deleteNow(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.updateLocalData(this.items);

    let toast = this.toastCtrl.create({
      message: 'Deleted successfully',
      duration: 3000
    });
    toast.present();

  }



  initialize() {
    this.getLocalData();
  }


  editNow(data) {
    let obj = {
      id: this.items.indexOf(data),
      title: data.title,
      note: data.note
    }

    this.navCtrl.push(Edit, obj)

  }

  // Db operation
  getLocalData() {

    if (localStorage.getItem("noteData")) {
      this.items = JSON.parse(localStorage.getItem("noteData"));
      console.log(this.items.length);
    } else {
      this.items = [];
    }

  }


  updateLocalData(items) {
    localStorage.setItem("noteData", JSON.stringify(items));
  }


}