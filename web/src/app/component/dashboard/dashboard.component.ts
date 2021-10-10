import { Component, OnInit } from "@angular/core";
import { DashboardService } from '../../service/dashboard.service'

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})

export class DashboardComponent implements OnInit {
  priceList: any[]

  constructor(private dashboardService: DashboardService) {
    this.priceList = []
  }

  ngOnInit() {
    this.dashboardService.get().subscribe(
      (data) => {
        this.priceList = data
        console.log(data)
      },
      (err) => {
        console.log(err)
        return false
      }
      )
      
  }
}
