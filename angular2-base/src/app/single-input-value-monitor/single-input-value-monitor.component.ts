import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-single-input-value-monitor',
  templateUrl: './single-input-value-monitor.component.html',
  styleUrls: []
})
export class SingleInputValueMonitorComponent implements
  OnChanges,
  OnInit {

  singleStringValue: string;
  singleNumberValue: number;
  singleBoolean: boolean;

  loadingLifeCycle = '';

  constructor() {
    this.loadingLifeCycle = '\r\n constructor';
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadingLifeCycle += '\r\n ngOnChanges';
  }

  ngOnInit() {
    this.loadingLifeCycle += '\r\n ngOnInit';
  }
}
