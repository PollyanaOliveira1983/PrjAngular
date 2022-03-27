import { Component, OnInit } from '@angular/core';
import { GhUser } from '../../models/ghUsers';
import { GhApiService } from '../../services/gh-api.service';
import { GhRepositorio } from '../../models/ghRepositorio';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  repositorio: GhRepositorio[] | null = null

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {

    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        this.user = gUser

        console.log(this.user.login)
      }
    )

    this.ghService.findUserRepositorio(this.username).subscribe(
      (gRepo) => {

        this.repositorio = gRepo

      }
    )
  }
  searchData(date: string): string {

    const today = new Date(date);
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const dataArray = [day, months[month], year]
    let date2 = dataArray.join('-')

    return date2
  }

}
