import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; /*import dopisany*/
import { OfferComponent } from './components/offer/offer.component';
import { ComputersComponent } from './components/computers/computers.component';
import { AdminComponent } from './admin/admin.component';
import { ComputerListComponent } from './admin/computer-list/computer-list.component';
import { ComputerDetailsComponentComponent } from './admin/computer-details-component/computer-details-component.component';

const routes: Routes = [
  {path: "", redirectTo: '/offer', pathMatch: 'full'},
  {path: "offer", component: OfferComponent},
  {path: "computers", component: ComputersComponent},
  {path: "admin", component: AdminComponent,
  children: 
    [
    {path: "", redirectTo: 'computerList', pathMatch: 'full'},
    {path: "computerList", component: ComputerListComponent},
    {path: "computerList/new", component: ComputerDetailsComponentComponent}
    ]
},
  {path: "**", component: OfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }