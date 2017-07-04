import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(new Recipe(
      'The Ultimate Greek Salad',
      `Whisk dressing ingredients together until blended.
      Season to taste.
      Drain onion from ice water and pat dry with paper towels.
      Combine all salad ingredients, except cheese, in large bowl.
      Toss with dressing.
      Sprinkle cheese over and serve.`,
      'http://img.sndimg.com/food/image/upload/h_420,w_560,c_fit/v1/img/recipes/90/97/5/xfirb0rQRMPAHtkSwTyA_THE%20FOOD%20GAYS%20-%20GREEK%20SALAD-2.jpg'
    ));

    this.recipes.push(new Recipe(
      'Test Name',
      'Test Desciption',
      'http://img.sndimg.com/food/image/upload/h_420,w_560,c_fit/v1/img/recipes/90/97/5/xfirb0rQRMPAHtkSwTyA_THE%20FOOD%20GAYS%20-%20GREEK%20SALAD-2.jpg'
    ));
  }

  ngOnInit() {
  }

}
