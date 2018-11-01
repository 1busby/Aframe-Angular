import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  boxDistance: number;
  gravity = 9.8

  boxVelocity = {
    x: 0,
    y: 0,
    z: 0
  }

  rotationUnsubscribe;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loaded = true;

    const source = timer(1000, 33);
    const subscribe = source.subscribe(val => {
      let boxPosition = this.floatBox.nativeElement.getAttribute('position');
      let cameraPosition = this.camera.nativeElement.getAttribute('position');

      // Find the distance by finding the hypotenuse
      this.boxDistance = Math.sqrt(
        (cameraPosition.x - boxPosition.x) * (cameraPosition.x - boxPosition.x) +
        (cameraPosition.y - boxPosition.y) * (cameraPosition.y - boxPosition.y)
      );
      let rotation = this.camera.nativeElement.getAttribute('rotation');
      console.log('camera: ', this.camera.nativeElement.getAttribute('rotation'));
      
      if (boxPosition.y >= 0.5) {
        this.boxVelocity.y -= 9.8 / 30;
      } else {
        this.boxVelocity.y = 0
      }


      boxPosition = {
        x: boxPosition.x + this.boxVelocity.x / 30,
        y: boxPosition.y + this.boxVelocity.y / 30,
        z: boxPosition.z + this.boxVelocity.z / 30
      }
      
      this.floatBox.nativeElement.setAttribute('position', `${boxPosition.x} ${boxPosition.y} ${boxPosition.z}`)
    });

  }

  mouseEntered(event) {}

  onError(event) {
    debugger;
  }

  boxMouseDown(event) {
    // this.rotationUnsubscribe = new Subject<any>();
    // const source = timer(1000, 1000);
    // console.log('camera: ', this.camera.nativeElement.getAttribute('position'))
    // console.log('event: ', event)
    // const subscribe = source.pipe(takeUntil(this.rotationUnsubscribe)).subscribe(val => {
    //   let rotation = this.camera.nativeElement.getAttribute('rotation')
    //   console.log('camera: ', this.camera.nativeElement.getAttribute('rotation'));
      
    //   // console.log(val);
    //   // this.floatBox.nativeElement.setAttribute('position', `${val} 0.5 -3`)
    // });
  }

  boxMouseUp(event) { 
    // this.rotationUnsubscribe.next();
    // this.rotationUnsubscribe.complete();
  }
}
