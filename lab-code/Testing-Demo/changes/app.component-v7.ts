import { Component, OnInit } from '@angular/core';
import { BasicService } from './basic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  longestString = "";
  strArray : string[] = ["cat","dog","elephant","mouse"];

  constructor(private basicService: BasicService) {
  }

  ngOnInit() {
    this.longestString = this.basicService.findLongestString(this.strArray);
  }

  

}
