import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/classes/computer';

@Component({
  selector: 'app-computer-details-component',
  templateUrl: './computer-details-component.component.html',
  styleUrls: ['./computer-details-component.component.css']
})
export class ComputerDetailsComponentComponent implements OnInit {

  private computerForm: FormGroup;
  private computer: Computer = new Computer("Name", "System", "Processor", "Graphics", "Memory", "Storage drivers", "Inputs", "Warranty", "Price", 0, "image");

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private computerService: ComputerService
            ) 
    { }

  ngOnInit()
  {
    this.buildForm();
    this.getForm();
  }

  buildForm()
  {
    this.computerForm = this.fb.group({
      name: [''],
      system: [''],
      processor: [''],
      graphics: [''],
      memory: [''],
      storageDrivers: [''],
      inputs: [''],
      warranty: [''],
      price: [''],
      amount: [0],
      image: ['']
    })
  }

  getForm()
  {
    this.route.params.subscribe(parameters => {
      if(parameters && parameters['id']) {
        this.computerService.getComputerById(parameters['id']).subscribe(computer => {
          this.computerForm.setValue(computer);
        }); 
      }
      else {
        this.computer = new Computer("Name", "System", "Processor", "Graphics", "Memory", "Storage drivers", "Inputs", "Warranty", "Price", 0, "image");
      }
    })
  }

  onSubmit()
  {
    console.log('this.computer', this.computer);
    this.computerService.addComputer(this.computer).subscribe(value => {
      this.router.navigate(['admin/computerList']);
    })
  }

}
