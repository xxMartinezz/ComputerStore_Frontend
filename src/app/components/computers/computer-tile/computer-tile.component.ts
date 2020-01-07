import { Component, OnInit, Input } from '@angular/core';
import { Computer } from 'src/app/classes/computer';

@Component({
  selector: 'app-computer-tile',
  templateUrl: './computer-tile.component.html',
  styleUrls: ['./computer-tile.component.css']
})
export class ComputerTileComponent implements OnInit {
  
  @Input() id;
  @Input() name;
  @Input() system;
  @Input() processor;
  @Input() graphics;
  @Input() memory;
  @Input() storageDrivers;
  @Input() inputs;
  @Input() warranty;
  @Input() price;
  @Input() amount;
  @Input() image;

  constructor() { }

  ngOnInit() {
  }

}
