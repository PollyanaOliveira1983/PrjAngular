import { AsyncSubject, BehaviorSubject, lastValueFrom, Observable, Observer, ReplaySubject, Subject, timeout } from "rxjs";

let obs$: Observable<string> = new Observable<string>((observer: Observer<string>) => {
    observer.next('Polly')
    observer.next('Edu')
    observer.next('Thyago')
    observer.next('Maria')
    
    /*observer.complete()*/
    setTimeout(() => {
        observer.next('Denise')
        observer.complete()
    }, 3000) 
})

/* obs$.subscribe(
    function(value) {
        console.log(`Valor retornado: ${value}`)/*sucesso
    },
    function(err) {
        console.error(`Deu erro!`)/*erro
    },
    () => {
        console.log(`Observable comtemplado!`)/*completede
    }
)
 */

let obs2$: Observable<number> = new Observable<number>((observer: Observer<number>) => {
    let i = 0

    let id = setInterval(() => {
        i++
        if (i < 5) {
            observer.next(i ** 2)
        }else{
            /* observer.error({
                error:true,
                message: 'Deus erro!'
            }) */
            observer.complete()
            clearInterval(id)
        }
    }, 3000)
})

//let sub$: Subject<number> = new Subject<number>()

/* let sub$: ReplaySubject<number> = new ReplaySubject<number>() */

/* let sub$: AsyncSubject<number> = new AsyncSubject<number>() */

let sub$: BehaviorSubject<number> = new BehaviorSubject<number>(5832)

obs2$.subscribe(sub$)

sub$.subscribe(sub$)

sub$.subscribe(
    (value) => {
    console.log(`Sub1`, value)
},
(err) => {
    console.log(err)
},
() => {
    console.log(`Sub1 concluido`)
}
)

/* setTimeout(() => {
 sub$.subscribe(
    (value) => {
        console.log(`Sub2`, value)
    },
    (err) => {
        console.log(err)
    },
    () => {
        console.log(`Sub2 concluido`)
    }
)
}, 3000);  */

////////////////////////////////////////////////////////////////////////////////////
/* obs2$.subscribe(
    (value) => {
        console.log(`Sub1`, value)
    },
    (err) => {
        console.log(err)
    },
    () => {
        console.log(`Sub1 concluido`)
    }
)

setTimeout(() => {
    obs2$.subscribe(
        (value) => {
            console.log(`Sub2`, value)
        },
        (err) => {
            console.log(err)
        },
        () => {
            console.log(`Sub2 concluido`)
        }
    )
}, 3000); */