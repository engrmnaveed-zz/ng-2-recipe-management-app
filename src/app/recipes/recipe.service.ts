import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingrediant} from '../shared/ingrediant.model';
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'The Ultimate Greek Salad',
      `Whisk dressing ingredients together until blended.
      Season to taste.
      Drain onion from ice water and pat dry with paper towels.
      Combine all salad ingredients, except cheese, in large bowl.
      Toss with dressing.
      Sprinkle cheese over and serve.`,
      'http://img.sndimg.com/food/image/upload/h_420,w_560,c_fit/v1/img/recipes/90/97/5/xfirb0rQRMPAHtkSwTyA_THE%20FOOD%20GAYS%20-%20GREEK%20SALAD-2.jpg',
      [
        new Ingrediant('Lemons', 2),
        new Ingrediant('Tomatos', 3),
        new Ingrediant('onions', 1)
      ]
    ),
    new Recipe(
      'Test Name',
      'Test Desciption',
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg',
      [
        new Ingrediant('Some Item', 6),
        new Ingrediant('Test Item', 8),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // slice will return the new copy of this array rather than reference to this array (which is default behaviour)
  }

  addIngrediantsToShoppingList(ingrediants: Ingrediant[]) {
    this.shoppingListService.addIngrediants(ingrediants);
  }

}
