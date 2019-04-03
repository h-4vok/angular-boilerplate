import { Component, OnInit, Input, Renderer2, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {
  @Input() showSpinner: Boolean;

  constructor(private renderer2: Renderer2) {
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (!this.showSpinner) {
      this.renderer2.removeClass(document.getElementById('homeDiv'), 'loader-class');
    } else if (this.showSpinner) {
      this.renderer2.addClass(document.getElementById('homeDiv'), 'loader-class');
    }
  }
}
