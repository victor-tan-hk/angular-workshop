import { Component, OnInit } from '@angular/core';
import { BasicService } from './basic.service';
import { RandomStringsService } from './randomstrings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  longestString = "";
  strArray : string[] = [];

  constructor(private basicService: BasicService, private randomStringsService: RandomStringsService) {
  }

  ngOnInit() {
    this.strArray =  this.randomStringsService.getRandomArrayStrings();
    this.longestString = this.basicService.findLongestString(this.strArray);
  }

  

}
