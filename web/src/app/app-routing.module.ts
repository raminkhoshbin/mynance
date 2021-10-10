import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './component/home/home.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { AccountComponent } from './component/account/account.component'
import { TradeComponent } from './component/trade/trade.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'trade',
    component: TradeComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
