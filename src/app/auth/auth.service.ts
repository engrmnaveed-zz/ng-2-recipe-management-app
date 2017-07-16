import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private toastrService: ToastrService) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response);
          this.toastrService.success('Congratulations! please provide credential on this login screen now to continue', 'Signed Up!', {
            positionClass: 'toast-top-center'
          });
          this.router.navigate(['/signin']);
        }
      )
      .catch(
        error => {
          this.toastrService.error(error['message'], error['code'], {
            positionClass: 'toast-bottom-left'
          });
        }
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.toastrService.success('Congratulations! Welcome to Recipes App', 'Sign In Sucess!', {
            positionClass: 'toast-bottom-left'
          });
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => {
          this.toastrService.error(error['message'], error['code'], {
            positionClass: 'toast-bottom-left'
          });
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.toastrService.info('You have been Successfully logged out from the App', 'Completed!', {
      positionClass: 'toast-bottom-left'
    });
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
