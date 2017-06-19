import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list";
import { Ingredient } from "../../models/ingredient";

@Component({
  selector: 'page-shoppinglist',
  templateUrl: 'shoppinglist.html'
})
export class ShoppinglistPage {
     listItems: Ingreditent[];

          constructor(private slService: ShoppingListService){}
     
     ionViewWillEnter(){
          this.loadItems();
     }
     
     onAddItem(form: NgForm){
          this.slService.additem(form.value.ingredientName, form.value.amount);
          form.reset();
          this.loadItems();
     }
     
     onCheckItem(index: number){
          this.slService.removeItem(index);
          this.loadItems();
     }
     
     private loadItems(){
          this.listItems = this.slService.getItems();
     }
}
