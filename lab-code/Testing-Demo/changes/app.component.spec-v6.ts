import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mainElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mainElement = fixture.debugElement.nativeElement;

    fixture.detectChanges();

  });


  it('should add / remove class name on the cool paragraph via [ngClass]', () => {


    // Query selector targeting the addClassField input text field
    let addClassField: HTMLInputElement = <HTMLInputElement>mainElement.querySelector('#addClassField');
    // Specifically place a random valid class value in this input text field
    addClassField.value = "emphasize";

    // Trigger a click on the button to add the new 
    // class value from the text field
    const addNameButton: HTMLButtonElement = <HTMLButtonElement>mainElement.querySelector('[data-testid="addNameButton"]');
    addNameButton.click();

    fixture.detectChanges();

    const pNode: HTMLParagraphElement = <HTMLParagraphElement>mainElement.querySelector('[data-testid="coolparagraph"]');

    // The original class value on this paragraph
    // is "medium". After addition of new class value
    // via [ngClass] it should become "medium emphasize" 
    let newClassValue = pNode.classList.value;
    expect(newClassValue).toContain("medium emphasize");


    // Trigger a click on the button to remove the  
    // newly added class value 
    const removeNameButton: HTMLButtonElement = <HTMLButtonElement>mainElement.querySelector('[data-testid="removeNameButton"]');
    removeNameButton.click();

    fixture.detectChanges();

    // The updated class value on this paragraph
    // is "medium emphasize". After addition of new 
    // class value via [ngClass] it should become 
    // "medium"
    expect(newClassValue).toContain("medium");


  });

  it('should show correct paragraph in accordance to status of cute checkbox', () => {

    // Initially cute checkbox is unchecked
    // Lets check it

    // Query selector targeting the cute checkbox
    let cuteCheckBox: HTMLInputElement = <HTMLInputElement>mainElement.querySelector('[data-testid="cutecheckbox"]');
    // Manually trigger the input event to 
    // check the checkbox
    cuteCheckBox.dispatchEvent(new Event("input"));

    fixture.detectChanges();

    // Verify that the paragraph 
    // saying the cute checkbox is ticked appears
    let pNode: HTMLParagraphElement = <HTMLParagraphElement>mainElement.querySelector('.cute-paragraph');

    expect(pNode.textContent).toContain("Cute checkbox is ticked");

    // Manually trigger the input event to 
    // uncheck the checkbox
    cuteCheckBox.dispatchEvent(new Event("input"));

    fixture.detectChanges();

    // Verify that the paragraph 
    // saying the cute checkbox is ticked appears
    pNode = <HTMLParagraphElement>mainElement.querySelector('.cute-paragraph');

    expect(pNode.textContent).toContain("Cute checkbox is NOT ticked");


  });


  it('should create the li items from the array correctly using ngFor', () => {

    // Query selector targeting the <li> elements
    let liEl: HTMLLIElement = <HTMLLIElement>mainElement.querySelector('li');

    let nodeList = mainElement.querySelectorAll('li');

    // The number of <li> items should be
    // the same as the number of items in the 
    // animals array
    expect(nodeList.length).toBe(component.animals.length);

    // The <li> item should contain the same content 
    // as each corresponding item in the animals array
    for (let i = 0; i < component.animals.length; i++) {
      expect(nodeList[i].textContent).toContain(component.animals[i]);
    }

  });

});
