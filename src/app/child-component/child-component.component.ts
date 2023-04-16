import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input()
  valueFromParent : string = 'none';

  inpValue : string = '';

  @Output()
  evtEmitter = new EventEmitter();

  handleInputChange(event : any){
    console.log(event.target.value)
    this.inpValue = event.target.value;
    this.evtEmitter.emit(this.inpValue);
  }

}
