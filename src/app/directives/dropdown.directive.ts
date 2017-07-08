import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false; //HostBinding will dynamacilay attach or deattach CSS class "open"

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
