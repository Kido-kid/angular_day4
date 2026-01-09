import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  // Input property to configure highlight color
  @Input('appHoverHighlight') highlightColor: string = 'lightblue';

  private originalColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    // Save the original background color
    this.originalColor = this.el.nativeElement.style.backgroundColor;
    // Apply highlight color
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Restore original background color
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalColor);
  }
}