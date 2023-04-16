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

  handleInputChange(event : any){
    console.log(event.target.value)
  }

  handleClick(){
    if(this.twoWayBindValue === 'submitted'){
      
      this.shouldEnable = true;
    }
    
  }
}
