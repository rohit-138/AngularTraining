import { Component, signal } from '@angular/core';
import { InputDemo } from '../input-demo/input-demo';
@Component({
  selector: 'app-second-component',
  imports: [InputDemo],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css'
})
export class SecondComponent {
  parentid=signal("0")


  updateId(eventData:string){
    this.parentid.set(eventData);
  }
}
