import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouteParams } from '@angular/router-deprecated';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from 'src/core/task';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';
import {AuthService} from "../../../core/auth/auth-service";


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    RouterLink,
    TaskItem
  ],
  pipes: [
    TaskListFilterPipe
  ],
  selector: 'task-list',
  styles: [
    require('./task-list.scss')
  ],
  template: `
    <ul class="task-filters">
      <li><a [class.active]="!activeFilter" [routerLink]="['/Tasks']">View All</a></li>
      <li><a [class.active]="activeFilter == 'active'" [routerLink]="['/Tasks', {filter: 'active'}]">Active</a></li>
      <li><a [class.active]="activeFilter == 'completed'" [routerLink]="['/Tasks', {filter: 'completed'}]">Completed</a></li>
    </ul>
    
    <div class="task-list">
      <div *ngFor="let task of taskItems$ | async | filterTasks:activeFilter">
        <!--{{getUserID()}}::{{task.user_id}}-->
        <task-item *ngIf="getUserID() == task.user_id" [task]="task"          
            (remove)="remove.emit(task)"
            (update)="update.emit({task: task, changes: $event})">          
        </task-item>
       </div>
    </div>
  `
})

export class TaskList {
  @Input() taskItems$: FirebaseListObservable<ITask[]>;
  @Output() remove: EventEmitter<ITask> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);

  activeFilter: string;

  constructor(private auth: AuthService, params: RouteParams) {
    this.activeFilter = params.get('filter');
  }

  getUserID():string{
    return this.auth.id;
  }
}
