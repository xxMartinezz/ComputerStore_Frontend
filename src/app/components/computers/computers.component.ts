import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/classes/computer';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  private computers: Computer[];

  constructor(private computerService: ComputerService) { }

  ngOnInit() {
    this.computerService.getComputers().subscribe (computerPage => {
      console.log('computerPage', computerPage);
      this.computers = computerPage.content;
    });
  }

}
