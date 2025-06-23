import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeHi from '@angular/common/locales/hi';
import localeAr from '@angular/common/locales/ar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstNum : number = 245000.438735;

  constructor() {
    registerLocaleData(localeFr, 'fr');
    registerLocaleData(localeHi, 'hi');
    registerLocaleData(localeAr, 'ar');
  }
}
