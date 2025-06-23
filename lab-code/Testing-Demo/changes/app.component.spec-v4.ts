import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let firstChildComponent : FirstChildComponent;
  let mainElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // Creates a mock of FirstChildComponent
        AppComponent, MockComponent(FirstChildComponent)
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;

    mainElement = fixture.debugElement.nativeElement;

    // Obtains an instance of this mock of FirstChildComponent
    const childEl = fixture.debugElement.query(By.directive(FirstChildComponent));
    firstChildComponent = childEl.componentInstance;

  });


  it('should render the child component correctly', () => {

    /*     This simply tests that the selector tag for the child component
        is present in the parent template. No issue here ...
     */
    const childSelector = mainElement.querySelector('app-first-child');
    expect(childSelector).toBeTruthy();

  });


  it('should pass the value from parentCounter to childCounter in the child component correctly', () => {
    appComponent.parentCounter = 10;
    fixture.detectChanges();

    // The property binding now takes effect on the 
    // mock and we can verify that the childCounter gets
    // the new value from parentCounter
    expect(firstChildComponent.childCounter).toBe(10);
  });



  it('change childText in accordance to event emitted from textChanged', () => {

    // Manually trigger the (textChanged) event binding 
    // on the child selector
    const message = "Some random message";
    let childSelector = fixture.debugElement.query(By.css('app-first-child'));
    childSelector.triggerEventHandler('textChanged',message);

    fixture.detectChanges();
    // Verify that the component property childText 
    // changes in accordance with this event
    expect(appComponent.childText).toBe(message);
  });




});
