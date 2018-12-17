import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-input-value-monitor',
  templateUrl: './object-input-value-monitor.component.html',
  styleUrls: []
})
export class ObjectInputValueMonitorComponent implements OnInit {

  objectValue = {
    singleStringValue: '',
    singleNumberValue: 0,
    singleBoolean: false
  };

  constructor() { }

  ngOnInit() {
  }

  objectRest(): void {
    this.objectValue = {
      singleStringValue: '',
      singleNumberValue: 0,
      singleBoolean: false
    };
  }

}
