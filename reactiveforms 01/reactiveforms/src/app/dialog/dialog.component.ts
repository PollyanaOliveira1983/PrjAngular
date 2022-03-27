import { Component,  OnInit } from '@angular/core';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  namel: string = "";
  lastnamel: string = "";
  cpfl: string = "";
  telephonel: string = "";
  adressl: string = "";
  complementl: string = "";
  usernamel: string = "";
  passwordl: string = "";

  constructor(){}


  ngOnInit(): void {

  }

}


