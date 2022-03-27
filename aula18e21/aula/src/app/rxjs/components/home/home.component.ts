import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { catchError, debounceTime, filter, first, last, map, Observable, Observer, of, pipe, retry, Subject, take, takeWhile, throwError, timeout } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  control: FormControl = new FormControl('', [
    Validators.required
  ])

  obs$: Observable<number> = new Observable<number>((observer: Observer<number>) => {

    let i = 0

    let id = setInterval(()=> {
      i ++

      if (i <= 5) {
        observer.next(i)
      } else {
        clearInterval(id)
        //observer.complete()
        observer.error('Deu problema!')
      }
    }, 20000)
  })

  sub$: Subject<string> = new Subject<string>()

  constructor() { }

  ngOnInit(): void {
    /* this.obs$.pipe(
      map((valor) => {
        return valor * 40
      }),
      map((x) => {
        return x ** 2
      }),
      map((x) => {
        return x / 2
      })
      filter((x) => {
        return x % 3 == 1
      })
      filter(x => {
        return x % 2 != 0
      }),
      map(y => y * 30),
      filter((z) => {
        return z % 2 == 0
      })
      filter(x => {
        return x % 2 != 0
      }),
      map(y => y * 30),
      //take(6)
      first()
      first((v) => {
        return v % 2 == 0
      })
      last()
      last((v) => {
        return v % 2 == 0
      })
      takeWhile((x) => {
        return x < 8
      })
    ).subscribe(
      (value) => {
        console.log(value)
      })
    this.sub$.
    pipe(
      debounceTime(2000)
    ).
    subscribe(
      (v) => {
        console.log(v)
      })*/
      this.obs$.pipe(
        map(x => x * 6),
        /* catchError(function(err) {
          //return of(err)

          return throwError(err)
        })
        retry(5)*/
        timeout(5000),
        catchError(err => {
          let obj = {
            hasError: true,
            msg: err.message
          }
          return of (obj)
        })
      ).subscribe(
        (value) => {
          console.log(value)
        },
        (err) => {
          console.log('OCORREU UM ERRO!, LEIA A MENSAGEM ABAIXO')
          console.log(err)
        }
      )
  }


  request(): void {
    //console.log(this.control.value)
    this.sub$.next(this.control.value)
  }
}
