import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouteParams } from '@angular/router-deprecated';
import { AuthRouteHelper, AuthService } from 'src/core/auth';

import { FirebaseListObservable } from 'angularfire2';
import { ITask } from 'src/core/task';
import { TaskItem } from 'src/views/tasks/task-item/task-item';
import { TaskListFilterPipe } from 'src/views/tasks/task-list/task-list-filter-pipe';
import { TaskService } from 'src/core/task';

import { SearchForm } from 'src/views/search-form';

@Component({
  selector: 'search-result',
  styles: [
    require('./search-result.scss')
  ],
  template: require('./search-result.html'),
  directives: [
    RouterLink,
    TaskItem,
      SearchForm
  ],

})

export class SearchResult {

  // constructor(private taskService: TaskService) {}
  @Input() taskItems$: FirebaseListObservable<ITask[]>;
  @Output() remove: EventEmitter<ITask> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);

  activeFilter: string;

  constructor( params: RouteParams, private taskService: TaskService) {
    this.taskItems$ = taskService.taskItems$
    this.activeFilter = params.get('filter');
  }

}
