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
  AfterViewChecked,
  Input
} from '@angular/core';

@Component({
  selector: 'app-load-order',
  templateUrl: './load-order.component.html',
  styleUrls: ['./load-order.component.css']
})
export class LoadOrderComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() input;
  loadingLifeCycle = '';

  constructor() {
    this.loadingLifeCycle = '\r\n constructor';
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // 在任何其他生命周期钩子之前调用。使用它来注入依赖项，但是要避免任何严重的工作。
    // Add '${implements OnChanges}' to the class.

    this.loadingLifeCycle += '\r\n ngOnChanges';
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // 在构造函数之后调用，初始化输入属性，以及对ngOnChanges的第一个调用。
    // Add 'implements OnInit' to the class.

    this.loadingLifeCycle += '\r\n ngOnInit';
  }

  ngDoCheck(): void {
    // Called every time that the input properties of a component or a directive are checked.
    // 每次检查组件或指令的输入属性时调用。
    // Use it to extend change detection by performing a custom check.
    // 通过执行自定义检查来扩展更改检测。
    // Add 'implements DoCheck' to the class.

    this.loadingLifeCycle += '\r\n ngDoCheck';
  }

  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // 当组件或指令的内容初始化后，在ngOnInit之后调用。
    // Add 'implements AfterContentInit' to the class.

    this.loadingLifeCycle += '\r\n ngAfterContentInit';
  }

  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // 每次检查组件或指令的内容后调用。
    // Add 'implements AfterContentChecked' to the class.
    this.loadingLifeCycle += '\r\n ngAfterContentChecked';
  }


  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // 在组件视图初始化后调用ngAfterContentInit。仅适用于组件。
    // Add 'implements AfterViewInit' to the class.

    this.loadingLifeCycle += '\r\n ngAfterViewInit';
  }


  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // 在组件视图的每次检查之后调用。仅适用于组件。
    // Add 'implements AfterViewChecked' to the class.

    this.loadingLifeCycle += '\r\n ngAfterViewChecked';
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // 在实例被销毁之前调用一次。
    // Add 'implements OnDestroy' to the class.
    this.loadingLifeCycle += '\r\n ngOnDestroy';

    console.log(this.loadingLifeCycle);
  }
}
