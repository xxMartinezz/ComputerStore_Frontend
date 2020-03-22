import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Form, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/classes/computer';

@Component({
  selector: 'app-computer-details-component',
  templateUrl: './computer-details-component.component.html',
  styleUrls: ['./computer-details-component.component.css']
})
export class ComputerDetailsComponentComponent implements OnInit {
 // @ViewChild("computerForm", {static: false}) form: NgForm;

  private computerForm: FormGroup;
  //private computer: Computer = new Computer("Name", "System", "Processor", "Graphics", "Memory", "Storage drivers", "Inputs", "Warranty", "Price", 0, "image");
  private computer: Computer;
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
    //this.getForm();
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
      amount: [''],
      image: [''],
      id: ['']
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
        //this.computer = new Computer(this.computerForm.value)
        //const {name, system, processor, graphics, memory, storageDrivers, inputs, warranty, price, amount, image} = this.computerForm.value;
        //this.computer = new Computer(name, system, processor, graphics, memory, storageDrivers, inputs, warranty, price, amount, image);
      }
    })
  }

  onSubmit()
  {
    // const {name, system, processor, graphics, memory, storageDrivers, inputs, warranty, price, amount, image} = this.computerForm.value;
    // this.computer = new Computer(name, system, processor, graphics, memory, storageDrivers, inputs, warranty, price, amount, image);
    // //this.computer = new Computer(this.computerForm.value)
    // console.log('this.computer', this.computer);
    // this.computerService.addComputer(this.computer).subscribe(value => {
    // this.router.navigate(['admin/computerList']);
    // })

    const form = { ...this.computerForm.value }
    const comp = new Computer(form)
    return this.computerService.addComputer(comp).subscribe(() => {
      this.router.navigate(['admin/computerList']);
    })
  }

}
