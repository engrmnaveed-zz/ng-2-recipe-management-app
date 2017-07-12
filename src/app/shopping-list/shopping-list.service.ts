import {Ingrediant} from '../shared/ingrediant.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  ingrediantsChanged = new Subject<Ingrediant[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingrediant[] = [
    new Ingrediant('Apple', 5),
    new Ingrediant('Tomatoes', 10)
  ];

  getIngrediants() {
    return this.ingredients.slice();
  }

  getIngrediant(index: number) {
    return this.ingredients[index];
  }

  addIngrediant(ingrediant: Ingrediant) {
    this.ingredients.push(ingrediant);
    this.ingrediantsChanged.next(this.ingredients.slice());
  }

  addIngrediants(ingrediants: Ingrediant[]) {
    this.ingredients.push(...ingrediants);
    this.ingrediantsChanged.next(this.ingredients.slice());
  }

  updateIngrediant(index: number, newIngrediant: Ingrediant) {
    this.ingredients[index] = newIngrediant;
    this.ingrediantsChanged.next(this.ingredients.slice());
  }

  deleteIngrediant(index: number) {
    this.ingredients.splice(index, 1);
    this.ingrediantsChanged.next(this.ingredients.slice());
  }

}
