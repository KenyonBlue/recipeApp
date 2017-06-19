import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-editrecipe',
  templateUrl: 'editrecipe.html'
})
export class EditRecipePage {
     mode = 'New';
     selectOptions = ['Easy','Medium','Hard'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
     
     ngOnInit(){
          this.mode = this.navParams.get('mode');
     }

}
