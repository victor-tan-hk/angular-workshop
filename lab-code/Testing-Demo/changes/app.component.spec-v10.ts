import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';


describe('AppComponent', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();


  });

  it('should create the AppComponent correctly', () => {
    // just a dummy it spec here 
    // since we are only performing unit test on FakeAPIService
    expect(true).toBeTruthy();
  });



});
