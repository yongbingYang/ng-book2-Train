import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-single-input-value-monitor-sub',
  templateUrl: './single-input-value-monitor-sub.component.html',
  styleUrls: []
})
export class SingleInputValueMonitorSubComponent implements OnChanges, OnInit {

  @Input() singleStringValue: string;
  @Input() singleNumberValue: number;
  @Input() singleBoolean: boolean;



  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(changes);
  }
  ngOnInit() {
  }

}
