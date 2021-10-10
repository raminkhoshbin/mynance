import { Component, OnInit } from '@angular/core'
import { AccountService } from '../../service/account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  accounts: any[];

  constructor(private accountService: AccountService) {
    this.accounts = []
  }

  ngOnInit() {
    this.accountService.getAccountInfo().subscribe(
      (data) => {
        this.accounts = data
        console.log(data)
      },
      (err) => {
        console.log(err)
        return false
      }
      
    )
  }
}
