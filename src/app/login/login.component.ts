import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }


}
