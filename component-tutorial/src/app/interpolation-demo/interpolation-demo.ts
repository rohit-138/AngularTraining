import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interpolation-demo',
  imports: [FormsModule],
  templateUrl: './interpolation-demo.html',
  styleUrl: './interpolation-demo.css'
})
export class InterpolationDemo {
  isDisabledBtn?:boolean;
  name?:string="";

  onChange(){
    console.log(this.name)
  }

  
  
  
}
