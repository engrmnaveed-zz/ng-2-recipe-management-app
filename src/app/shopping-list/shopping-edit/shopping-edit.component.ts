import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingrediant} from '../../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngrediant = new Ingrediant(ingName, ingAmount);

    console.log('onAddItem called');

    // this.ingrediantAdded.emit(newIngrediant);
  }

}
