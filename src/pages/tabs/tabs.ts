import { Component } from '@angular/core';

import { EditrecipePage } from '../editrecipe/editrecipe';
import { RecipePage } from '../recipe/recipe';
import { ShoppinglistPage } from '../shoppinglist/shoppinglist';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ShoppinglistPage;
  tab2Root = RecipePage;
  tab3Root = EditrecipePage;

  constructor() {

  }
}
