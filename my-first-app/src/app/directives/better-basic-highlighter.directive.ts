import {
  Directive ,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterBasicHighlighter]'
})
export class BetterBasicHighlighterDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.border') border: string = 'solid 2px black'
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', 'solid 2px black');
  }
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    this.border = 'solid 2px green';

  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.border = 'solid 2px orange';
  }

}
