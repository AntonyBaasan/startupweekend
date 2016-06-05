import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/core/task';
import { Autofocus } from 'src/views/common';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    Autofocus
  ],
  selector: 'confirm-page',
  styles: [
    require('./confirm-page.scss')
  ],
  template: require('./confirm-page.html')
})

export class ConfirmPage
{
	@Input() task: ITask;
}