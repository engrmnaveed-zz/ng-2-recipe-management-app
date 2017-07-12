import {Component, OnInit} from '@angular/core';
import {Ingrediant} from '../../shared/ingrediant.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {

    const value = form.value

    const newIngrediant = new Ingrediant(value.name, value.amount);

    this.shoppingListService.addIngrediant(newIngrediant);
  }

}
