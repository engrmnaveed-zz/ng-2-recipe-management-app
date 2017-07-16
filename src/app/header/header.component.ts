import {Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageSerice: DataStorageService,
              private toastrService: ToastrService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageSerice.storeRecipe().subscribe(
      (response: Response) => {
        console.log(response);
        this.toastrService.success('All Recipes have been successfully saved!', 'Saved!', {
          positionClass: 'toast-bottom-left'
        });
      }
    );
  }

  onFetchData() {
    this.dataStorageSerice.getRecipe();
    this.toastrService.success('All Recipes have been successfully fetched!', 'Fetched!', {
      positionClass: 'toast-bottom-left'
    });
  }

  onLogout() {
    this.authService.logout();
  }

}
