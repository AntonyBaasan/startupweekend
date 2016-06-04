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
      <input
        (keyup.escape)="clear()"
        ngControl="title"
        [(ngModel)]="title"
        autocomplete="off"
        autofocus
        class="task-form__input"
        placeholder="What needs to be done?"
        required
        type="text">
		
		picture
		<input 
			enctype="multipart/form-data"
			ngControl="file"
			[(ngModel)]="file"
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
		
    </form>
  `
})

export class TaskForm {
  @Output() createTask: EventEmitter<Task> = new EventEmitter(false);

  //console.log(this.file);
  
  title: string = '';
  name: string ='';
  description: string ='';
  category: string ='';
  price: number = 0;
  contact: string ='';
  xcoord: number = 0;
  ycoord: number = 0;
  

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title: string = this.title.trim();
	
	var allinfo = new Task(this.name, this.description, this.category, this.price, this.contact, this.xcoord, this.ycoord)
	
	
    if (title.length) {
      this.createTask.emit(allinfo);
    }
    this.clear();
  }
}
