import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ComputersComponent } from './components/computers/computers.component';
import { MatTableModule } from '@angular/material/table';
import { OfferComponent } from './components/offer/offer.component';
import { ComputerTileComponent } from './components/computers/computer-tile/computer-tile.component';
import { ComputerTilesComponent } from './components/computers/computer-tiles/computer-tiles.component';
import { AdminComponent } from './admin/admin.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ComputerListComponent } from './admin/computer-list/computer-list.component';
import { ComputerDetailsComponentComponent } from './admin/computer-details-component/computer-details-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material'; /* relevant import */

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      OfferComponent,
      MenuComponent,
      ComputersComponent,
      ComputerTileComponent,
      ComputerTilesComponent,
      AdminComponent,
      ComputerListComponent,
      ComputerDetailsComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatToolbarModule,
      MatMenuModule,
      HttpClientModule,
      FlexLayoutModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatTableModule,
      MatButtonToggleModule,
      ReactiveFormsModule,
      MatInputModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
