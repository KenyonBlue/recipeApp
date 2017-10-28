import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NavController, NavParams, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { RecipesService } from "../../services/recipes";
import {Recipe } from '../../models/recipe';




@Component({
  selector: 'page-editrecipe',
  templateUrl: 'editrecipe.html'
})
export class EditRecipePage implements OnInit {
     mode = 'New';
     selectOptions = ['Easy','Medium','Hard'];
     recipeForm: FormGroup;
     recipe: Recipe;
     index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetController: ActionSheetController, public alertController: AlertController, public toastCtrl: ToastController, 
              public recipesService: RecipesService) {}
     
     ngOnInit(){
          this.mode = this.navParams.get('mode');
          if (this.mode == 'Edit'){
               this.recipe == this.navParams.get('recipe');
               this.index == this.navParams.get('index');
          }
          this.initializeForm();
     }
onSubmit(){
     const value = this.recipeForm.value;
     let ingredients = [];
     if (value.ingredients.length > 0){
          ingredients = value.ingredients.map(name => {
               return { name: name, amount: 1};
          });
     }
     this.recipesService.addRecipe(value.title, value.description, value.difficulty, value.ingredients);
     this.recipeForm.reset();
     this.navCtrl.popToRoot();
}

onManageIngredients(){
     const actionSheet = this.actionSheetController.create({
          title: 'What do you want to do?',
          buttons:[
               {
               text:'Add Ingredient',
               handler: () => {
                 this.creatNewIngredientAlert().present();
               }
          },
               {
                    text: 'Remove all Ingredients',
                    role: 'destructive',
                    handler:() => {
                         const fArray: FormArray = <FormArray>this.recipeForm.get('ingredients');
                         const len = fArray.length;
                              if (len > 0) {
                                   for (let i = len - 1; i >= 0; i--){
                                        fArray.removeAt(i);
                                   }
                                   const toast = this.toastCtrl.create({
                                   message: 'All ingredients were deleted!',
                                   duration: 1500,
                                   position: 'bottom'
                              });
                              toast.present();
                              }
                    }
               },
                    {
                    text: 'Cancel',
                    role:'cancel'
                    }
                  
          ]
     });
     actionSheet.present();
}

private creatNewIngredientAlert(){
     return this.alertController.create({
          title: 'Add Ingredient',
          inputs:[
               {
                    name: 'name',
                    placeholder: 'Name'
               }
          ],
          buttons: [
               {
                    text: 'Cancel',
                    role: 'cancel'
               },
               {
                    text: 'Add',
                    handler: data => {
                         if (data.name.trim()  == ' ' || data.name == null){
                              const toast = this.toastCtrl.create({
                                   message: 'Please enter valid value',
                                   duration: 1500,
                                   position: 'bottom'
                              });
                              toast.present();
                              return;
                         }
                         (<FormArray>this.recipeForm.get('ingredients'))
                              .push(new FormControl(data.name, Validators.required));
                         const toast = this.toastCtrl.create({
                                   message: 'Item added',
                                   duration: 1500,
                                   position: 'bottom'
                              });
                              toast.present();
                    }
               }
          ]
     });
                         
}

public initializeForm(){
     let title = null;
     let description = null;
     let difficulty = 'Medium';
     let ingredients = [];
     
     if (this.mode == 'Edit'){
          title = this.recipe.title;
          description = this.recipe.description;
          difficulty = this.recipe.difficulty;
          for (let ingredient of this.recipe.ingredients){
               ingredients.push(new FormControl(ingredient.name, Validators.required));
          }
     }
          this.recipeForm = new FormGroup({
               'title': new FormControl(title, Validators.required),
               'description': new FormControl(description, Validators.required),
               'difficulty': new FormControl(difficulty, Validators.required),
               'ingredients': new FormArray(ingredients)
          });
     }
}
