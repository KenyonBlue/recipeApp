import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list";

@Component({
  selector: 'page-shoppinglist',
  templateUrl: 'shoppinglist.html'
})
export class ShoppinglistPage {

          constructor(private slService: ShoppingListService){
               
          }
     
     onAddItem(form: NgForm){
          this.slService.additem(form.value.ingredientName, form.value.amount);
          form.reset();
     }
}
