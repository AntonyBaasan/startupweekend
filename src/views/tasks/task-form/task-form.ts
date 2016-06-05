import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ITask } from 'src/core/task';
import { Task } from 'src/core/task/task';
import {AuthService} from "../../../core/auth/auth-service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-form',
  styles: [
    require('./task-form.scss')
  ],
  template: require('./task-form.html')
})

export class TaskForm {
  @Output() createTask: EventEmitter<Task> = new EventEmitter(false);

  picture: URL;
  title: string = '';
  name: string ='';
  description: string ='';
  category: string ='';
  price: number = 0;
  contact: string ='';
  xcoord: number = 0;
  ycoord: number = 0;

  constructor(private auth: AuthService) {}
    
  clear(): void {
    this.name = '';
  }

  submit(): void {

    console.log("this.auth.id:  "+this.auth.id);

	const allinfo = new Task(this.name, this.description, this.category, this.price, this.contact, this.xcoord, this.ycoord, this.picture, this.auth.id);
	
	console.log(this.picture);
	
    if (this.name.length) {
      this.createTask.emit(allinfo);
    }
    this.clear();
  }
}
