import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildComponent } from './first-child.component';

describe('FirstChildComponent', () => {
  let component: FirstChildComponent;
  let fixture: ComponentFixture<FirstChildComponent>;
  let mainElement: HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstChildComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FirstChildComponent);
    component = fixture.componentInstance;
    mainElement = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the @Input property change correctly', () => {

    /*     Simulate @Input childCounter property receiving a new 
    random value via property binding in the parent template. 
    We have to do this because we cannot perform a direct
    integration test
     */
    component.childCounter = 15;
    fixture.detectChanges();

    const pNode: HTMLParagraphElement = <HTMLParagraphElement>mainElement.querySelector('[data-testid="showChildCounter"]');
    expect(pNode.textContent).toContain("15");
  });


  it('should send back text box content as @Output property: using subscription', () => {

/*     Subscribe to the textChanged @Output property which
      is an observable, and store the value in it when the 
      next event occurs (due to emit method being called on it)
 */    
    let actualText: string | undefined;
    component.textChanged.subscribe((textBoxContent: string) => {
      actualText = textBoxContent;
    });

    const newTextBoxContent = 'Some random message';

    // Query selector targeting the Child text box input  field
    let childBoxNode: HTMLInputElement = <HTMLInputElement>mainElement.querySelector('#childbox');
    // Specifically place the random message in this input text field
    childBoxNode.value = newTextBoxContent;
    // Manually trigger the input event to activate the event binding in that field
    childBoxNode.dispatchEvent(new Event("input"));

    // This checks for changes at which point the emit method
    // should have been called on textChanged inside the 
    // processTextChange method 
    fixture.detectChanges();

    expect(actualText).toBe(newTextBoxContent);
  });

  it('should send back text box content as @Output property: using a spy', () => {
    
    // Using  a spy to check  whether the emit method was
    // at any point called on the @Output property
    spyOn(component.textChanged, 'emit'); 

    const newTextBoxContent = 'Some random message';

    // Query selector targeting the Child text box input  field
    let childBoxNode: HTMLInputElement = <HTMLInputElement>mainElement.querySelector('#childbox');
    // Specifically place the random message in this input text field
    childBoxNode.value = newTextBoxContent;
    // Manually trigger the input event to activate the event binding in that field
    childBoxNode.dispatchEvent(new Event("input"));

    // This checks for changes at which point the emit method
    // should have been called on textChanged inside the 
    // processTextChange method 
    fixture.detectChanges();

    // Check that the emit method was indeed called with that value
    expect(component.textChanged.emit).toHaveBeenCalledWith(newTextBoxContent); 
  });


});
