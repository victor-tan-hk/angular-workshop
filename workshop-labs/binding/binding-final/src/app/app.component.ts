import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myPlace: string = "Kuala Lumpur";
  disableFirstButton: boolean = false;
  myfirstTextBoxText: string='';

  @ViewChild('myFirstButton',{static : true}) theFirstButton : ElementRef;
  @ViewChild('mySecondTextBox',{static : true}) theSecondTextBox: ElementRef;
  @ViewChild('myParagraph',{static : true}) theParagraph: ElementRef;



  onFirstButtonClick(event: MouseEvent) {
    console.log("The mouse button that was clicked was " + event.button);
    console.log("Mouse was clicked at x-coordinate : " + event.clientX);
    console.log("Mouse was clicked at y-coordinate : " + event.clientY);
    console.log("Button text is : " + (<HTMLButtonElement> event.target).innerText);
    console.log("The event is : ", event);
  }

  onSecondButtonClick() {
    console.log("Second text box : " + this.theSecondTextBox.nativeElement.value);
    this.disableFirstButton = !this.disableFirstButton;
  }

  onThirdButtonClick(textBox: HTMLInputElement) {
    console.log("Changing text in paragraph and first button");
    let newContent = this.myfirstTextBoxText + ' ' + this.theSecondTextBox.nativeElement.value + ' ' + textBox.value;
    this.theParagraph.nativeElement.textContent = newContent;
    this.theFirstButton.nativeElement.innerHTML = this.theSecondTextBox.nativeElement.value;
  }

  containsDog(): boolean {
    if (this.theSecondTextBox.nativeElement.value.indexOf('dog') >= 0)
      return true;
    else 
      return false;
  }

  getFixedString(): string {
    return 'Java and C++';
  }
}
