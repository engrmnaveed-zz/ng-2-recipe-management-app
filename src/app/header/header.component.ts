import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() viewSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedView: string) {
    this.viewSelected.emit(selectedView);
  }

}
