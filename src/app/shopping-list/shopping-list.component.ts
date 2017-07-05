import { Component, OnInit } from '@angular/core';
import {Ingrediant} from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingrediant[] = [];

  constructor() {
    this.ingredients.push(new Ingrediant('Apple', 5));
    this.ingredients.push(new Ingrediant('Tomatoes', 10));
  }

  ngOnInit() {
  }

  onIngrediantAdded(intgrediant: Ingrediant) {
    this.ingredients.push(intgrediant);
  }

}
