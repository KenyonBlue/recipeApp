import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-editrecipe',
  templateUrl: 'editrecipe.html'
})
export class EditRecipePage implements OnInit {
     mode = 'New';
     selectOptions = ['Easy','Medium','Hard'];
     recipeForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetController: ActionSheetController, public alertController: AlertController) {}
     
     ngOnInit(){
          this.mode = this.navParams.get('mode');
          this.initializeForm();
     }
onSubmit(){
     console.log(this.recipeForm);
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

public creatNewIngredientAlert(){
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
                              return;
                         }
                         (<FormArray>this.recipeForm.get('ingredients'))
                              .push(new FormControl(data.name, Validators.required));
                    }
               }
          ]
     });
                         
}

public initializeForm(){
          this.recipeForm = new FormGroup({
               'title': new FormControl(null, Validators.required),
               'description': new FormControl(null, Validators.required),
               'difficulty': new FormControl('Medium', Validators.required),
               'ingredients': new FormArray([])
          });
     }
}
