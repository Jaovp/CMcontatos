import { Injectable, NgZone } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioDados: any;

  constructor(private firebase: FirebaseService, private fireAuth: AngularFireAuth, private router: Router, private ngZone: NgZone) {
    this.fireAuth.authState.subscribe(usuario => {
      if(usuario){
        this.usuarioDados = usuario;
        localStorage.setItem('usuario', JSON.stringify(this.usuarioDados));
      }else{
        localStorage.setItem('usuario', 'null');
      }
    });
   }

  //Login com Email e Senha
   public signIn(email: string, password: string){}

   public signUpWithEmailPassword(email: string, password: string){}

   public recoverPassword(email: string){}
  
   //metodos gerais
   public signOut(){}

   public getUserLogged(){}

   public isLoggedIn(): boolean{
      return false;
   }
}
