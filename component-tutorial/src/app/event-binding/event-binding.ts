import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {

  username?:string;

  onChange(event:Event){
    const temp=event.target as HTMLInputElement;
    this.username=temp.value;
    console.log(this.username)
  }
}
