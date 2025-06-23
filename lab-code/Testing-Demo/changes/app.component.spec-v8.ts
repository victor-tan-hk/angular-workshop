import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BasicService } from './basic.service';


describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mainElement: HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [BasicService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mainElement = fixture.debugElement.nativeElement;


  });

  it('should create the AppComponent correctly', () => {
    expect(component).toBeTruthy();
  });

  it('should find and render the largest string correctly ', () => {

    // Here, we use a new string array that is different from 
    // the one used in the component 
    component.strArray = ['batman','spiderman','thor'];
    
    // Important to trigger Angular change detection
    // so that any bindings can be updated to the DOM template
    fixture.detectChanges();

    // Verify that the paragraph with the interpolation contains the longest string from the array
    const pNode : HTMLParagraphElement = <HTMLParagraphElement> mainElement.querySelector('[data-testid="showLongest"]');
    expect(pNode.textContent).toContain("spiderman");
  });


});
