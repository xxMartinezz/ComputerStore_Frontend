import { Component, OnInit } from '@angular/core';
import { Computer, ComputerPage } from 'src/app/classes/computer';
import { ComputerService } from 'src/app/services/computer.service';

@Component({
  selector: 'app-computer-tiles',
  templateUrl: './computer-tiles.component.html',
  styleUrls: ['./computer-tiles.component.css']
})
export class ComputerTilesComponent implements OnInit {

  private computers: Computer[];

  constructor(private computerService: ComputerService) { }

  ngOnInit()
  {
    this.computerService.getComputers().subscribe(ComputerPage => {
      console.log('computerPage', ComputerPage);
      this.computers = ComputerPage.content;
    });
  }

}
