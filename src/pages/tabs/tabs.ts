import { Component } from '@angular/core';


import { RecipesPage } from '../recipes/recipes';
import { ShoppinglistPage } from '../shoppinglist/shoppinglist';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ShoppinglistPage;
  tab2Root = RecipesPage;
  

  constructor() {

  }
}
