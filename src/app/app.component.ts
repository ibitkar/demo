import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { HttpService } from './services/http.service';
import { SampleService } from './services/sample.service';
import { getUsersList } from '../app/constants/shared.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z \-\']+"),Validators.minLength(5)]),
    address: new FormControl(''),
    department: new FormControl('', [Validators.required]),

  })
  departments: any = [
    {
      id: 0,
      name: "Marketing"
    },
    {
      id: 1,
      name: "Business Analytics"
    },
    {
      id: 2,
      name: "Development"
    }
  ]

  constructor(private sampleService: SampleService
  ) { }
  ngOnInit() {
  }


  public hasError = (controlName: string, errorName: string) => {
    // return this.employeeForm.get(controlName)?.hasError(errorName)
    return this.employeeForm.get(controlName)?.hasError(errorName)
  }

  submitForm() {
    console.log('formvalue', this.employeeForm.value);

    let apidata={
      x:this.employeeForm.controls.name.value
    }

    this.employeeForm.reset();
  }

}
