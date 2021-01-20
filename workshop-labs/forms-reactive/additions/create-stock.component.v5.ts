import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';

import { Stock } from '../../model/stock';

let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})

export class CreateStockComponent {

  private stock: Stock;
  public stockForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.stock = new Stock('Test ' + counter++, 'TST', 20, 10);
  }

  createForm() {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  get name() { return this.stockForm.get('name'); }

  get code() { return this.stockForm.get('code');}

  get price() { return this.stockForm.get('price');}

  demoSetValue() {
    this.stock = new Stock(`SetValue count : ${counter++}`, 'peter', 30, 50);
    let stockFormCopy = Object.assign({}, this.stock);
    delete stockFormCopy.previousPrice;
    delete stockFormCopy.favorite;
    this.stockForm.setValue(stockFormCopy);
  }

  demoPatchValue() {
    this.stock = new Stock(`PatchValue count : ${counter++}`, 'jane', 20, 10);
    this.stockForm.patchValue(this.stock);
  }

  demoReset() {
    this.stockForm.reset();
  }

  onSubmit() {
    this.stock = Object.assign({}, this.stockForm.value);
    console.log('Submitted stock : ', this.stock);
  }

}
