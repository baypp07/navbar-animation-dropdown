import { Component, VERSION } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('openClose', [
      state('false', style({ height: '*' })),
      state('true', style({ height: '0px' })),
      transition('false <=> true', [ animate(500) ])
    ])
  ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  show = true;

  toggle() {
    this.show = !this.show};

}
