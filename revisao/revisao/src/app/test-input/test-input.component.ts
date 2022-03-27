import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.css']
})
export class TestInputComponent implements OnInit, AfterViewInit{

  @Input()
  name: string = 'Pollyana Oliveira'

  @ViewChild('para')
  para!: ElementRef

  constructor() { }

  ngAfterViewInit(): void {
   console.log(this.para.nativeElement.textContent)
  }

  ngOnInit(): void {
    console.log(`${this.name} tem ${this.name.length} caracteres`)
  }


}
