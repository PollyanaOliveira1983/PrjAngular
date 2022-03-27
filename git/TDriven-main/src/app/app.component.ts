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

    public dialog: MatDialog
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

    console.log('sucesso!')

    this.openDialog()

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Cadastro de Cliente',
      name: this.name,
      lastname: this.lastname,
      cpf: this.cpf,
      telephone: this.telephone,
      adress: this.adress,
      complement: this.complement,
      username: this.username,
      password: this.password

    };

    this.dialog.open(DialogComponent, dialogConfig);

  }

}















//////////////////////DIALOGO PRONTO E COM PARAMENTROS PASSADOS POLLY/////////////////
