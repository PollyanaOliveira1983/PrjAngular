import { Component } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula1603';


  personalData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    sex: new FormControl('',[Validators.required]),
     tels: new FormArray([new FormControl('', [Validators.required]), new FormControl('', [Validators.required])])
})
   tels: FormArray = this.personalData.get('tels') as FormArray
  constructor(

    private snack: MatSnackBar,
    private fb: FormBuilder

  ){}

  submit():void {

    console.log(`Name= ${this.personalData.controls['name'].value}`)
    console.log(`LastName= ${this.personalData.controls['lastname'].value}`)
    console.log(`Email = ${this.personalData.controls['email'].value}`)
    console.log(`Sex = ${this.personalData.controls['sex'].value}`)
    console.log(`Tels:`)

    this.tels.controls.forEach((control) => {
      console.log(control.value)
    })

    this.snack.open(`Voce foi cadastrado!`, 'ok', { duration: 3000 })
  }
      newContact(): void{
      this.tels.push(new FormControl('',[Validators.required]))
    }

    deleteContact():void{
    this.tels.controls = this.tels.controls.filter((x , index) => {
      return index != this.tels.controls.length - 1
    })
  }

}


