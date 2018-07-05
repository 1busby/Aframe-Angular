import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-ufo',
  templateUrl: './ufo.component.html',
  styleUrls: ['./ufo.component.css']
})
export class UfoComponent implements OnInit {
  @Input() hostElement: any;
  @ViewChild('entityContainer') entityContainer
  
  loaded = false
  ufoHeight = 10;

  constructor() { }

  ngOnInit() {
    this.loaded = true;
    // debugger
    this.hostElement.appendChild(this.entityContainer.nativeElement);
    // this.hostElement.appendChild(this.entityContainer.nativeElement);
    // let container = this.hostElement.innerHTML;
    // this.hostElement.innerHTML = container
  }

  mouseEntered(event) {
    
  }
}
