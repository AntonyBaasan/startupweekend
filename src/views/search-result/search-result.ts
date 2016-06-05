import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RouterLink, RouteParams, Router } from '@angular/router-deprecated';
import { AuthRouteHelper, AuthService } from 'src/core/auth';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from 'src/core/task';
import { TaskItem } from 'src/views/tasks/task-item/task-item';
import { TaskService } from 'src/core/task';
import { SearchFormSmall } from 'src/views/search-form-small';

@Component({
  selector: 'search-result',
  styles: [
    require('./search-result.scss')
  ],
  template: require('./search-result.html'),
  directives: [
    RouterLink,
    TaskItem,
    SearchFormSmall
  ],
})

export class SearchResult implements OnInit {

  // constructor(private taskService: TaskService) {}
  @Input() taskItems$: FirebaseListObservable<ITask[]>;
  @Output() remove: EventEmitter<ITask> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);

  activeFilter: string;
  searchText: string;

  constructor(private params: RouteParams, private taskService: TaskService) {
    this.taskItems$ = taskService.taskItems$
    this.activeFilter = params.get('filter');
  }

  ngOnInit():void {
    this.searchText = this.params.get('search') as string;
  }

  isMoreZero(n : number): boolean{
    return n >= 0;
  }

}
