import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('ufoEntity') ufoEntity: ElementRef
  loaded = false

  ufoHeight = 10;

  ngOnInit() {
    this.loaded = true;
  }

  mouseEntered(event) {
    
  }

  onError(event) {
    debugger
  }
}
