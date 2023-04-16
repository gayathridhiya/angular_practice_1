import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  name = 'Gayathri';
  style = "color:yellow";
  twoWayBindValue = "defaultValue";
  shouldEnable = false;
  numbers = [...Array(11).keys()].slice(1) //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  handleInputChange(event : any){
    console.log(event.target.value)
  }

  handleClick(){
    if(this.twoWayBindValue === 'submitted'){
      
      this.shouldEnable = true;
    }
    
  }
}
