import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleInputValueMonitorComponent } from './single-input-value-monitor/single-input-value-monitor.component';
import { SingleInputValueMonitorSubComponent } from './single-input-value-monitor-sub/single-input-value-monitor-sub.component';
import { LoadOrderComponent } from './load-order/load-order.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ObjectInputValueMonitorComponent } from './object-input-value-monitor/object-input-value-monitor.component';
import { ObjectInputValueMonitorSubComponent } from './object-input-value-monitor-sub/object-input-value-monitor-sub.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SingleInputValueMonitorComponent,
    SingleInputValueMonitorSubComponent,
    LoadOrderComponent,
    ObjectInputValueMonitorComponent,
    ObjectInputValueMonitorSubComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
