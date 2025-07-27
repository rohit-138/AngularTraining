import { Component,input ,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-demo',
  imports: [FormsModule],
  templateUrl: './input-demo.html',
  styleUrl: './input-demo.css'
})
export class InputDemo {
  id=input();
  newId:any=this.id();

  @Output() idUpdateEvent=new EventEmitter<string>();

  updateIdInParent(){
    this.idUpdateEvent.emit(this.newId)
  }
}
