import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; /*import dopisany*/
import { OfferComponent } from './components/offer/offer.component';
import { ComputersComponent } from './components/computers/computers.component';

const routes: Routes = [
  {path: "", redirectTo: '/offer', pathMatch: 'full'},
  {path: "offer", component: OfferComponent},
  {path: "computers", component: ComputersComponent},
  {path: "**", component: OfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }