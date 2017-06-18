import { Component } from '@angular/core';

@Component({
  selector: 'page-shoppinglist',
  templateUrl: 'shoppinglist.html'
})
export class ShoppinglistPage {

     
     onAddItem(form: any){
          console.log(form);
     }
}
