import { Component } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  mdp: string;

  constructor(private firebaseAuthentication: FirebaseAuthentication) {

  }

  logIn(){
    this.firebaseAuthentication.signInWithEmailAndPassword(this.email, this.mdp)
      .then(r => console.log(r)).catch((error: any) => console.error(error));
  }
}
