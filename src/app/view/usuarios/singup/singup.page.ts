import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  formLogar : FormGroup;

  constructor(private alertController : AlertController, private router : Router, private formBuilder : FormBuilder) {
    this.formLogar = new FormGroup({
      email : new FormControl(''),
      senha : new FormControl('')
    })
   }

  ngOnInit() {
    this.formLogar = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      senha : ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  get errorControl(){
    return this.formLogar.controls;
  }
  
  submitForm() : boolean{
    if(!this.formLogar.valid){
      this.presentAlert('Erro', 'Erro ao Preencher!');
      return false;
    }else{
      this.logar();
      return true;
    }
  }

  private logar(){
    this.presentAlert('Sucesso','Cadastrado com Sucesso!');
    this.router.navigate(["/singin"]);
  }

  logarComGoogle(){

  }

  irParaSingUp(){
    this.router.navigate(["/singup"]);
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
