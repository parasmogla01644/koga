import {
    Directive,
    ElementRef,
    EventEmitter,
    Output,
    HostListener,
  } from "@angular/core";
  
  @Directive({
    selector: "[appClickOutside]",
  })
  export class ClickOutsideDirective {
    @Output() clickOutside: EventEmitter<MouseEvent> =
      new EventEmitter<MouseEvent>();
  
    constructor(private _elementRef: ElementRef) {}
  
    @HostListener("document:click", ["$event", "$event.target"])
    onClick(event: MouseEvent, targetElement: HTMLElement): void {
      if (!targetElement) {
        return;
      }
  
      const elementClicked =
        this._elementRef.nativeElement.contains(targetElement);
      if (!elementClicked) {
        this.clickOutside.emit(event);
      }
    }
  }
  