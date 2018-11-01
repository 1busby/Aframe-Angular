import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {  } from 'aframe';
import { timer } from 'rxjs/observable/timer';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('floatBox')
  floatBox: ElementRef;

  @ViewChild('cursor')
  cursor: ElementRef;

  @ViewChild('camera')
  camera: ElementRef;

  loaded = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loaded = true;
    const source = timer(1000, 2000);
    const subscribe = source.subscribe(val => {
      console.log('camera: ', this.camera.nativeElement.getAttribute('rotation'));
      // console.log(val);
      // this.floatBox.nativeElement.setAttribute('position', `${val} 0.5 -3`)
    });

  }

  mouseEntered(event) {}

  onError(event) {
    debugger;
  }

  boxMouseDown(event) {
    console.log('camera: ', this.camera.nativeElement.getAttribute('position'))
    console.log('event: ', event)
  }
}
