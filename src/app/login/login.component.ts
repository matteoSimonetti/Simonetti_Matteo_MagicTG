import { Component } from '@angular/core';
import { AutenticationService } from '../autentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  nickname: string = '';
  password: string = '';

  constructor(private userJson: AutenticationService, private router: Router) { }

  login() {
    this.userJson.getUsers().subscribe(users => {
      const user = users.find((u: any) => u.nickname === this.nickname && u.password === this.password);
  
      if (user) {
        // Esegui azione di accesso riuscito
        this.router.navigate(['/sito']);
        console.log('Accesso riuscito');
      } else {
        // Esegui azione di accesso non riuscito
        console.log('Accesso non riuscito');
      }
    });
  }
}
