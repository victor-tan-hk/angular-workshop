import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BasicService } from './basic.service';
import { RandomStringsService } from './randomstrings.service';


describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mainElement: HTMLElement;
  let randomStringsServiceSpy : jasmine.SpyObj<RandomStringsService>;


  beforeEach(async () => {

    // Creating a spy object that will function as a mock
    // in replacement of calls to the getRandomArrayStrings
    // method in the actual RandomStringsService 
    let spy = jasmine.createSpyObj('RandomStringsService',['getRandomArrayStrings']);

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],

      // set up this spy object in the providers array
      // so that every time RandomStringsService is injected into
      // the constructor of any component, the spy is injected in its
      // place instead
      providers: [BasicService,
        { provide: RandomStringsService, useValue: spy }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mainElement = fixture.debugElement.nativeElement;

    // Obtain access to the spyObject injected into the TestBed
    // in replacement of the actual  RandomStringsService
    randomStringsServiceSpy = TestBed.inject(RandomStringsService) as jasmine.SpyObj<RandomStringsService>;

  });


  it(' renders largest string using a spy to provide stub results', () => {

    // Set up the spy so that when the actual service is injected into
    // the component and the getRandomArrayStrings method is invoked on it,
    // the spy will return a fixed array of values 
    // (instead of a random array of values in the case of the actual service)
    const fixedArray = ['batman','spiderman','thor'];
    randomStringsServiceSpy.getRandomArrayStrings.and.returnValue(fixedArray);

    fixture.detectChanges();

    // Verify that the paragraph with the interpolation contains the longest string from the array
    const pNode : HTMLParagraphElement = <HTMLParagraphElement> mainElement.querySelector('[data-testid="showLongest"]');
    expect(pNode.textContent).toContain("spiderman");

  });

});
