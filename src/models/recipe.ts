import { Ingredient } from "../models/ingredient";

export class Recipe {
     constructor (
     public title: string, 
      public description: string, 
      public difficulty: string, 
      public ingredients: Ingredient[]){}
}