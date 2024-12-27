import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  
  onSubmit() {
    if (this.username && this.password) {
      // Handle login logic here (authentication service, etc.)
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      if (this.username === "admin") {
        this.router.navigate(['/upload']);
      }
      else if (this.username === "student") {
        this.router.navigate(['/student']);
      } else if (this.username === "guide") {
        this.router.navigate(['/guide']); 
      } else {
        this.router.navigate([])
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
