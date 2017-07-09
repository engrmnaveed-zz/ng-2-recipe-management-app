import {Ingrediant} from '../shared/ingrediant.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingrediantsChanged = new EventEmitter<Ingrediant[]>();

  private ingredients: Ingrediant[] = [
    new Ingrediant('Apple', 5),
    new Ingrediant('Tomatoes', 10)
  ];

  getIngrediants() {
    return this.ingredients.slice();
  }

  addIngrediant(ingrediant: Ingrediant) {
    this.ingredients.push(ingrediant);
    this.ingrediantsChanged.emit(this.ingredients.slice());
  }

}
