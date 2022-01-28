import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
//import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
 //recipeSelected=new Subject<Recipe>();
 recipesChanged=new Subject<Recipe[]>();

 /*   private recipes: Recipe[]=[
        new Recipe('Tasty Schnitzel','A super-tasty SCHNITZEL-yummiee!!','https://media.istockphoto.com/photos/schnitzel-and-fried-potatoes-picture-id603258520?k=20&m=603258520&s=612x612&w=0&h=NF7aWLkDZEWAqFIScubghELMxjXIo1i5Wdl2cShSX-s=',
        [new Ingredient('Meat',1),
    new Ingredient('French Fries',20)]),
        new Recipe('Big Fat Burger','Tummy full:):::)))','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mbtg1wsd3zdqu3v3rpgd' ,
        [new Ingredient('Buns',2),
    new Ingredient('Meat',1)])
      ]; */

      private recipes:Recipe[]=[];

      constructor(private slService:ShoppingListService){}
    
        setRecipes(recipes:Recipe[]){
          this.recipes=recipes;
          this.recipesChanged.next(this.recipes.slice());
        }

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
    }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}