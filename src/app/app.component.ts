import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations'

@Component({
  selector: 'my-app',
  template: `
    <div class="row">
        <div class="columns">
            <button (click)="toggleMove()">Press me for animation</button>
        </div>
        <div class="columns">
            <div id="content" [@focusPanel]='state' [@movePanel]='active'>Look at me animate</div>
        </div>

    </div>
  `,
  styles: [`
        button{font-size: 1.8em;}
        #content{padding:30px; background: #eeeeee;}
      `],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)',
        backgroundColor: '#eee'

      })),
      state('active', style({
        transform: 'scale(1.1)',
        backgroundColor: '#cfd8dc'
      })),

      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))


    ]),
    trigger('movePanel', [

      transition('void => *', [
        animate(600, keyframes([
          style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ])




    ])
  ]
})
export class AppComponent {
  state: string = 'inactive';
  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

}
