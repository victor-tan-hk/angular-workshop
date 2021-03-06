import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})

export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    const diff = this.stock.price - this.stock.previousPrice;
    const largeChange = Math.abs(diff) > 5.0;
    this.stockClasses = {
      'positive': this.stock.isPositiveChange(),
      'negative': !this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change': !largeChange
    };
  }

  toggleFavorite() {
    this.stock.favorite = !this.stock.favorite;
  }
}
