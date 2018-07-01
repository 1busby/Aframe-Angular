import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded = false

  ngOnInit() {
    this.loaded = true;
    // setTimeout(() => {
    //   this.loaded = true
    // }, 5000);
  }

  error(event) {
    debugger
  }
}
