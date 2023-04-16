import { Component } from '@angular/core';
import { CalServiceService } from '../cal-service.service';

@Component({
  selector: 'app-second-cal',
  templateUrl: './second-cal.component.html',
  styleUrls: ['./second-cal.component.css']
})
export class SecondCalComponent {
  num1 : number = 0;
  num2 : number = 0;
  op : number = 0;

  calculate(){
    let shared = new CalServiceService();
    this.op = shared.calculate(this.num1,this.num2)
  }

}
