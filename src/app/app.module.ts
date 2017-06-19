import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EditrecipePage } from '../pages/editrecipe/editrecipe';
import { RecipePage } from '../pages/recipe/recipe';
import { RecipesPage } from '../pages/recipes/recipes';
import { ShoppinglistPage } from '../pages/shoppinglist/shoppinglist';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ShoppingListService } from "../services/shopping-list";

@NgModule({
  declarations: [
    MyApp,
    EditrecipePage,
    RecipePage,
    ShoppinglistPage,
       RecipesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditrecipePage,
    RecipePage,
    ShoppinglistPage,
       RecipesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, ShoppingListService
  ]
})
export class AppModule {}
