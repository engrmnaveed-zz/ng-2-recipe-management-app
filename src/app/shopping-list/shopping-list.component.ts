import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingrediant} from '../shared/ingrediant.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingrediant[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngrediants();
    this.subscription = this.shoppingListService.ingrediantsChanged.subscribe(
      (ingrediants: Ingrediant[]) => {
        this.ingredients = ingrediants;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
