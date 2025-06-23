import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';

describe('AppComponent', () => {

  /*   Demonstrating initial attempt to perform integration testing
    on child component from changes in parent - 
    This will not work directly !   */

  let parentFixture: ComponentFixture<AppComponent>;
  let childFixture: ComponentFixture<FirstChildComponent>;

  let parentComponent: AppComponent;
  let childComponent: FirstChildComponent;

  let mainChildElement: HTMLElement;
  let mainParentElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, FirstChildComponent
      ],
    }).compileComponents();

    parentFixture = TestBed.createComponent(AppComponent);
    parentComponent = parentFixture.componentInstance;

    childFixture = TestBed.createComponent(FirstChildComponent);
    childComponent = childFixture.componentInstance;

    mainParentElement = parentFixture.debugElement.nativeElement;
    mainChildElement = childFixture.debugElement.nativeElement;


  });


  it('should render the child component correctly', () => {

    /*     This simply tests that the selector tag for the child component
        is present in the parent template. No issue here ...
     */
    const childSelector = mainParentElement.querySelector('app-first-child');
    expect(childSelector).toBeTruthy();

  });


/*   Uncomment the failed test below to verify that direct 
  integration testing attempt below will not work*/
/* 
  it('should transfer value from parentCounter to childCounter correctly', () => {

    parentComponent.parentCounter = 10;
    parentFixture.detectChanges();
    childFixture.detectChanges();
    // We expect this to be 10 due to property binding, 
    // but it does not work !! Be careful ! 
    expect(childComponent.childCounter).toBe(10);
    console.log("Actual value of child counter is " + childComponent.childCounter);

  });

 */




});
