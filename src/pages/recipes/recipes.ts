import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditRecipePage } from "../editrecipe/editrecipe";
import { Recipe } from "../../models/recipe";
import { RecipesService } from "../../services/recipes";


@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
     recipes: Recipe[];
     
     
  constructor(public navCtrl: NavController, private recipesService: RecipesService) {
  }
     ionViewWillEnter(){
          this.recipes = this.recipesService.getRecipes();
     }
     
     onNewRecipe(){
          this.navCtrl.push(EditRecipePage, {mode: 'New'});
     }
     
     onLoadRecipe(){
          
     }

}
