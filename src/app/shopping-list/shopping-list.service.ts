import {Ingrediant} from '../shared/ingrediant.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  ingrediantsChanged = new Subject<Ingrediant[]>();

  private ingredients: Ingrediant[] = [
    new Ingrediant('Apple', 5),
    new Ingrediant('Tomatoes', 10)
  ];

  getIngrediants() {
    return this.ingredients.slice();
  }

  addIngrediant(ingrediant: Ingrediant) {
    this.ingredients.push(ingrediant);
    this.ingrediantsChanged.next(this.ingredients.slice());
  }

  addIngrediants(ingrediants: Ingrediant[]) {
    this.ingredients.push(...ingrediants);
    this.ingrediantsChanged.next(this.ingredients.slice());
  }

}
