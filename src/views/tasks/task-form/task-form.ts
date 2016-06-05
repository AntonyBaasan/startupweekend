import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ITask } from 'src/core/task';
import { Task } from 'src/core/task/task';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-form',
  styles: [
    require('./task-form.scss')
  ],
  template: `
    <form class="task-form" (ngSubmit)="submit()" novalidate >
		
		picture
		<input 
			enctype="multipart/form-data"
			ngControl="picture"
			type = "file">
		<br>
		name
		<input
			ngControl="name"
			[(ngModel)]="name"
			type = "text">
			
		description
		<input
			ngControl="description"
			[(ngModel)]="description"
			type = "text">
		<br>
		category
		<input
			ngControl="category"
			[(ngModel)]="category"
			type = "text">
		<br>	
		price
		<input
			ngControl="price"
			[(ngModel)]="price"
			type = "number">
		<br>	
		contact
		<input
			ngControl="contact"
			[(ngModel)]="contact"
			type = "text">
		<br>	
		xcoord
		<input
			ngControl="xcoord"
			[(ngModel)]="xcoord"
			type = "number">	
		ycoord
		<input
			ngControl="ycoord"
			[(ngModel)]="ycoord"
			type = "number">
		<br>
		<input
			type="submit" value="Add Item">
		
    </form>
  `
})

export class TaskForm {
  @Output() createTask: EventEmitter<Task> = new EventEmitter(false);

  picture: Blob;
  title: string = '';
  name: string ='';
  description: string ='';
  category: string ='';
  price: number = 0;
  contact: string ='';
  xcoord: number = 0;
  ycoord: number = 0;
  
 
  clear(): void {
    this.name = '';
  }

  submit(): void {
	
	const allinfo = new Task(this.name, this.description, this.category, this.price, this.contact, this.xcoord, this.ycoord);//, this.picture);
	
	console.log(this.picture);
	
    if (this.name.length) {
      this.createTask.emit(allinfo);
    }
    this.clear();
  }
}
