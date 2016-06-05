import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/core/task';
import { Autofocus } from 'src/views/common';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    Autofocus
  ],
  selector: 'task-item',
  styles: [
    require('./task-item.scss')
  ],
  template: require('./task-item.html')
})

export class TaskItem {
  @Input() task: ITask;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);

  editing: boolean = false;
  name: string = '';
  price: number = 0;
  picture: URL=null;
  completed: boolean = true;

  editname(): void {
    this.editing = true;
    this.name = this.task.name;
	this.price = this.task.price;
	this.picture = this.task.picture;
  }

  savename(): void {
    if (this.editing) {
      const name: string = this.name.trim();
      if (name.length && name !== this.task.name) {
        this.update.emit({name});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.update.emit({
      completed: !this.task.completed
    });
  }
}
