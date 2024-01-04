import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isSignUpActive: boolean = false;

  toggleForm() {
    this.isSignUpActive = !this.isSignUpActive;
  }

  signUp() {
    // Handle sign-up logic
  }

  signIn() {
    // Handle sign-in logic
  }

}
