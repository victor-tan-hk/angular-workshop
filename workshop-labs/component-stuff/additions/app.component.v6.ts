import {
  Component, SimpleChanges, OnInit, OnChanges, OnDestroy,
  DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked,
  AfterContentInit
} from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Stock Market App';
  public stockObj: Stock;

  testMethod() {
    console.log('Test method in AppComponent triggered');
  }

  onToggleFavorite(stock: Stock) {
    this.stockObj.favorite = !this.stockObj.favorite;
  }

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

}
