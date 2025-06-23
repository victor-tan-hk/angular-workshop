import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mainElement: HTMLElement;

  const initialmyFirstName = "unknown";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mainElement = fixture.debugElement.nativeElement;


  });

  it('should create the AppComponent correctly', () => {
    expect(component).toBeTruthy();
  });

  it(`should have initial value for myFirstName as ${initialmyFirstName}`, () => {

    // Here the actual value to be compared to is declared as a const at the top
    expect(component.myFirstName).toBe(initialmyFirstName);
  });

  it('should have main h2 heading as Today is a great day', () => {

    // Query selector targeting the H2 element directly
    const headerNode: HTMLHeadingElement = <HTMLHeadingElement>mainElement.querySelector('h2');
    // Here the actual value to be compared to is directly hardcoded in the matcher
    expect(headerNode.textContent).toBe('Today is a great day');
  });

  it('should have cooltoday as Cool things to do today', () => {

    // Query selector targeting an id
    const headerNode: HTMLHeadingElement = <HTMLHeadingElement>mainElement.querySelector('#cooltoday');
    // Here the actual value to be compared to is directly hardcoded in the matcher
    expect(headerNode.textContent).toBe('Cool things to do today');
  });

  it('should have cooltomorrow as Cool things to do tomorrow', () => {

    // Query selector targeting a data attribute id
    const headerNode: HTMLHeadingElement = <HTMLHeadingElement>mainElement.querySelector('[data-testid="cooltomorrow"]');
    // Here the actual value to be compared to is directly hardcoded in the matcher
    expect(headerNode.textContent).toBe('Cool things to do tomorrow');
  });

  it('should have the single link to https://www.malaymail.com', () => {

    // Query selector targeting the anchor tag
    const aNode: HTMLAnchorElement = <HTMLAnchorElement> mainElement.querySelector('a');
    // Check that the href property contains the specified hyperlink
    expect(aNode.href).toContain('https://www.malaymail.com');
  });


  it('should have Your first name contains property myFirstName', () => {

    // Here, we simply set a dummy value for the myFirstName property
    // and then check that the interpolation containing this property works 
    component.myFirstName = "Superman";

    // Important to trigger Angular change detection
    // so that any bindings can be updated to the DOM template 
    fixture.detectChanges();

    // Verify that the paragraph with the interpolation contains this value
    const pNode : HTMLParagraphElement = <HTMLParagraphElement> mainElement.querySelector('p');
    expect(pNode.textContent).toContain("Superman");

  });

  it('should have Your first name contains the content of the textbox above it', () => {

    // Query selector targeting the First Name input text field
    let fnameNode: HTMLInputElement = <HTMLInputElement>mainElement.querySelector('#fname');
    // Specifically place a dummy value in this input text field
    fnameNode.value = "Spiderman";
    // Manually trigger the input event to activate the event binding in that field
    fnameNode.dispatchEvent(new Event("input"));

    // Important to trigger Angular change detection
    // so that any bindings can be updated to the DOM template 
    fixture.detectChanges();

    // Check that the paragraph below the text field 
    // contains this dummy value
    const pNode : HTMLParagraphElement = <HTMLParagraphElement> mainElement.querySelector('p');
    expect(pNode.textContent).toContain("Spiderman");

  });

  it('should have the Reset Last name button set the content of the textbox above it to Parker', () => {

    // Query selector targeting the Last Name input text field
    let lnameNode: HTMLInputElement = <HTMLInputElement>mainElement.querySelector('#lname');
    // Specifically place a dummy value in this input text field
    lnameNode.value = "Some dummy value";
    console.log("Placed dummy value in the Last Name field : Some dummy value");

    // Trigger a click on the button
    const buttonNode: HTMLButtonElement = <HTMLButtonElement>mainElement.querySelector('button');
    buttonNode.click();

    // Important to trigger Angular change detection
    // so that any bindings can be updated to the DOM template 
    fixture.detectChanges();

    // Check that the click action causes the Last Name input text field 
    // to be reset to Parker
    expect(lnameNode?.value).toBe("Parker");

  });

});
