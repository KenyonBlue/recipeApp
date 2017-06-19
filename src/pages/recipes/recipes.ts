import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditRecipePage } from "../editrecipe/editrecipe";

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  constructor(public navCtrl: NavController) {

  }
     
     onNewRecipe(){
          this.navCtrl.push(EditRecipePage, {mode: 'New'});
     }

}
