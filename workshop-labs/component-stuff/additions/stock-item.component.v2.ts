import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',

  templateUrl: './stock-item.component.html',
  styles: [`
  .stock-container {
  border: 1px solid black;
  border-radius: 5px;
  display: inline-block;
  padding: 10px;
  }
  
  .stock-container .name {
	display: inline-block;
  }  

  .positive {
  color: green;
  }

  .negative {
  color: red;
  }
  `]

})

export class StockItemComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  toggleFavorite() {
    console.log('We are toggling the favorite state for this stock');
    this.stock.favorite = !this.stock.favorite;
  }
}
