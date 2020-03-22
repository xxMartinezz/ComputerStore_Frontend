import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Computer } from 'src/app/classes/computer';
import { ComputerService } from 'src/app/services/computer.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  private computerList: Computer[];
  displayedColumns: string[] = ['id', 'name', 'system', 'processor', 'graphics', 'memory', 'storageDrivers', 'inputs', 'warranty', 'price', 'amount', 'image'];

  constructor(
    private computerService: ComputerService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit()
  {
    this.computerService.getComputers().subscribe(computerPage => {
      console.log('computerPage', computerPage)
      this.computerList = computerPage.content;
      console.log('this.computerList', this.computerList)
      this.cdr.markForCheck();
    });
  }

}
