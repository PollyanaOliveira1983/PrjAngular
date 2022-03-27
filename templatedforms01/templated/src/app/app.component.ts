import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templated';


    name: string = ''
    lastname: string = ''
    cpf: string = ''
    telephone: string = ''
    adress: string = ''
    complement: string = ''
    username: string = ''
    password: string = ''
    confpassword: string = ''

  constructor(

    private dialog: MatDialog

  ){}


  submit():void{
  console.log(`Name = ${this.name}`)
  console.log(`LastName = ${this.lastname}`)
  console.log(`CPF = ${this.cpf}`)
  console.log(`Telephone = ${this.telephone}`)
  console.log(`Adress = ${this.adress}`)
  console.log(`Complement = ${this.complement}`)
  console.log(`Username = ${this.username}`)
  console.log(`Password = ${this.password}`)
  console.log(`Confpassword= ${this.confpassword}`)

  if (this.password !== this.confpassword) {
      alert("As senhas digitadas estão diferentes ! Digite senhas iguais");
      return ;
  }

  let ref = this.dialog.open(DialogComponent)

  ref.componentInstance.namel = this.name
  ref.componentInstance.lastnamel = this.lastname
  ref.componentInstance.usernamel = this.username
  ref.componentInstance.cpfl = this.cpf
  ref.componentInstance.telephonel = this.telephone
  ref.componentInstance.adressl = this.adress
  ref.componentInstance.complementl = this.complement


 }

  }


