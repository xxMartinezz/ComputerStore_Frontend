import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/classes/computer';
import { ComputerService } from 'src/app/services/computer.service';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  private computerList: Computer[];

  constructor(private computerService: ComputerService) { }

  ngOnInit()
  {
    this.computerService.getComputers().subscribe(computerPage => {
      console.log('computerPage', computerPage)
      this.computerList = computerPage.content;
    });
  }

}
