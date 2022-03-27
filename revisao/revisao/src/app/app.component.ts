import { Component, ViewChild } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { TestInputComponent } from './test-input/test-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revisao';

  @ViewChild(TestInputComponent)
  testInput!: TestInputComponent

  @ViewChild('input')
  testInput2!: TestInputComponent

  ngAfterViewInit() {
    //console.log(this.testInput.name)
   /*  setTimeout(() => {
      this.testInput.name = 'Thyago Oliveira'
    }, 5000) */
    //console.log(this.testInput2.name)

  }

  ngOnInit(): void {
    let obs$: Observable<number> = new Observable<number>((observer: Observer<number>) => {
     /*  observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.next(4)
      observer.next(5)
      observer.next(6) */
      let i = 0
      let id = setInterval(() => {
        i++

        if (i < 6) {
          observer.next(i)
        } else {
          observer.complete()
          clearInterval(id)
        }
      }, 1000)

      observer.complete()
    })
    obs$.subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error( 'Ocorreu um erro', error)
      },
      () => {
        console.info('Observable concluido')
      }
    )
    setTimeout(() => {
      obs$.subscribe(
        (data) => {
          console.log(data)
        },
        (error) => {
          console.error( 'Ocorreu um erro', error)
        },
        () => {
          console.info('Observable concluido')
        }
      )
    })

  }
}
