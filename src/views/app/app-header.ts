import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {SearchForm} from 'src/views/search-form';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  styles: [
    require('./app-header.scss')
  ],
  template: `
    <header class="header">
      <div class="g-row">
        <div class="g-col">
          <h1 class="header__title">{{projectTitle}}</h1>
		<searchform></searchform>  
		<ul class="header__links">
            <li *ngIf="authenticated"><a class="header__link" (click)="signOut.emit()" href="#">Sign out</a></li>
            <!--<li><a class="header__link header__link&#45;&#45;github" href="https://github.com/r-park/todo-angular2-firebase"></a></li>-->
          </ul>
        </div>
      </div>
    </header>
  `,
  directives: [SearchForm]
})

export class AppHeader {
  projectTitle:string = "project_title - Startup";
  @Input() authenticated: boolean;
  @Output() signOut: EventEmitter<any> = new EventEmitter(false);
}
