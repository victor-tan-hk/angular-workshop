import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

/*   We can provide the actual values we wish to use in the various 
  spec tests right up here, or we could also hardcode these values
  directly in the specs in the matcher functions that are chained to 
  the expect
 */  const initialmyFirstName = "unknown";

  /*  This is relevant and must be executed before each test spec
   it creates and compiles the component being tested by including
   it inside the testing module of the TestBed class provided by 
   Angular
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the AppComponent correctly', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have initial value for myFirstName as ${initialmyFirstName}`, () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    // Here the actual value to be compared to is declared as a const at the top
    expect(component.myFirstName).toBe(initialmyFirstName);
  });

  it('should have main h2 heading as Today is a great day', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const mainElement: HTMLElement = fixture.debugElement.nativeElement;

    // Query selector targeting the H2 element directly
    const headerNode: HTMLHeadingElement = <HTMLHeadingElement>mainElement.querySelector('h2');
    // Here the actual value to be compared to is directly hardcoded in the matcher
    expect(headerNode.textContent).toBe('Today is a great day');
  });

  it('should have cooltoday as Cool things to do today', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const mainElement: HTMLElement = fixture.debugElement.nativeElement;

    // Query selector targeting an id
    const headerNode: HTMLHeadingElement = <HTMLHeadingElement>mainElement.querySelector('#cooltoday');
    // Here the actual value to be compared to is directly hardcoded in the matcher
    expect(headerNode.textContent).toBe('Cool things to do today');
  });

  it('should have cooltomorrow as Cool things to do tomorrow', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const mainElement: HTMLElement = fixture.debugElement.nativeElement;

    // Query selector targeting a data attribute id
    const headerNode: HTMLHeadingElement = <HTMLHeadingElement>mainElement.querySelector('[data-testid="cooltomorrow"]');
    // Here the actual value to be compared to is directly hardcoded in the matcher
    expect(headerNode.textContent).toBe('Cool things to do tomorrow');
  });

  it('should have the single link to https://www.malaymail.com', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const mainElement: HTMLElement = fixture.debugElement.nativeElement;

    // Query selector targeting the anchor tag
    const aNode: HTMLAnchorElement = <HTMLAnchorElement> mainElement.querySelector('a');
    // Check that the href property contains the specified hyperlink
    expect(aNode.href).toContain('https://www.malaymail.com');
  });


  it('should have Your first name contains property myFirstName', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const mainElement: HTMLElement = fixture.debugElement.nativeElement;

    const component = fixture.componentInstance;
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
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const mainElement: HTMLElement = fixture.debugElement.nativeElement;

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
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const mainElement: HTMLElement = fixture.debugElement.nativeElement;

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
