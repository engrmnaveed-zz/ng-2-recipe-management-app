import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://recipe-book-demo-ng.firebaseio.com/recipes.json', recipes);
  }

  getRecipe() {
    return this.http.get('https://recipe-book-demo-ng.firebaseio.com/recipes.json').subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingrediants']) {
            recipe['ngrediants'] = [];
          }
        }
        this.recipeService.setRecipes(recipes);
      }
    );
  }

}

