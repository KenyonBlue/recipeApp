import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-editrecipe',
  templateUrl: 'editrecipe.html'
})
export class EditRecipePage implements OnInit {
     mode = 'New';
     selectOptions = ['Easy','Medium','Hard'];
     recipeForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
     
     ngOnInit(){
          this.mode = this.navParams.get('mode');
          this.initializeForm();
     }
onSubmit(){
     console.log(this.recipeForm);
}

public initializeForm(){
          this.recipeForm = new FormGroup({
               'title': new FormControl(null, Validators.required),
               'description': new FormControl(null, Validators.required),
               'difficulty': new FormControl('Medium', Validators.required)
          });
     }
}
