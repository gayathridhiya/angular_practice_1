import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalServiceService } from '../cal-service.service';

@Component({
  selector: 'app-first-cal',
  templateUrl: './first-cal.component.html',
  styleUrls: ['./first-cal.component.css']
})
export class FirstCalComponent {
  num1 : number = 0;
  num2 : number = 0;
  op : number = 0;

  constructor(private shared: CalServiceService){}

  calculate(){
    this.op = this.shared.calculate(this.num1, this.num2)
  }

}
