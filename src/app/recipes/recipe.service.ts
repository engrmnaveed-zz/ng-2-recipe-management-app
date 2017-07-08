import {Recipe} from './recipe.model';
import {EventEmitter} from "@angular/core";

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
      'http://img.sndimg.com/food/image/upload/h_420,w_560,c_fit/v1/img/recipes/90/97/5/xfirb0rQRMPAHtkSwTyA_THE%20FOOD%20GAYS%20-%20GREEK%20SALAD-2.jpg'
    ),
    new Recipe(
      'Test Name',
      'Test Desciption',
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice(); // slice will return the new copy of this array rather than reference to this array (which is default behaviour)
  }
}
