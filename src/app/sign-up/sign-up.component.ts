import { Component } from '@angular/core';
import { User } from '../models/user.model'
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  user: User = new User('', '', '', '');




  //voir https://angular.io/api/forms/NgForm#template-variable-references
  onSubmit(f: NgForm) {
    console.log('User created:', this.user);
     /* 
    il est possible que le formulaire puisse être null ou undefined. Si cela se produit et que nous tentons d'accéder
    à la propriété valid d'un objet null ou undefined, cela entraînerait une erreur JavaScript (TypeError). 
     */
    //if (f && f.valid) {
    //  console.log('User created:', this.user);
    // }
  }

}
