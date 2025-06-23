import { Component } from '@angular/core';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-second-child',
  imports: [],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.css'
})
export class SecondChildComponent {

  tempVal = 0;

  constructor(private basicService: BasicService) { }

  setValForService(hie: HTMLInputElement) {
    this.basicService.setNum(parseInt(hie.value));
  }

  getValFromService(){
    this.tempVal = this.basicService.getNum();
  }


}
