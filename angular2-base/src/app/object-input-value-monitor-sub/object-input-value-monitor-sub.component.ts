import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-object-input-value-monitor-sub',
  templateUrl: './object-input-value-monitor-sub.component.html',
  styleUrls: []
})
export class ObjectInputValueMonitorSubComponent implements OnChanges, OnInit {

  @Input() objectValue;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

  ngOnInit() {
  }

}
