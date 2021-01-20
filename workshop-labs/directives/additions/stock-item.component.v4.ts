import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockStyles;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 80, 92);
    const diff = this.stock.price - this.stock.previousPrice;
    const largeChange = Math.abs(diff) > 5.0;
    this.stockStyles = {
      'color': this.stock.isPositiveChange() ? 'green' : 'red',
      'font-size': largeChange ? '3.0em' : '1.0em'
    };
  }

  toggleFavorite() {
    this.stock.favorite = !this.stock.favorite;
  }
}
