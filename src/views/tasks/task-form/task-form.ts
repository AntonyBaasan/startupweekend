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
<<<<<<< HEAD
    <form class="task-form" (ngSubmit)="submit()" novalidate >
		
		picture
		<input 
			ngControl="picture"
			[(ngModel)]="picture"
			type = "URL">
		<br>
		name
=======
    <div class="container-fluid">
    <div class="row">
        <form class="task-form form-group" (ngSubmit)="submit()" novalidate >
		<div class="col-xs-12 form-group">
		<label>Item Title</label>
>>>>>>> 89dc846a1280ab41dc20ca906ec776a418ce33dc
		<input
			ngControl="name"
			class="form-control form-control-lg"
			[(ngModel)]="name"
			type = "text">
		</div>
		<div class="col-xs-12 form-group">
		<label>Description</label>
		<textarea
			ngControl="description"
			class="form-control form-control-lg"
			rows="5"
			[(ngModel)]="description"
			type = "text"></textarea>
		</div>
		<div class="col-xs-6 form-group">
		<label>Category</label>
		<input
			ngControl="category"
			class="form-control form-control-lg"
			[(ngModel)]="category"
			placeholder="will switch to select input type"
			type = "text">
		</div>
		<div class="col-xs-6 form-group">
		<label>Price</label>
		<input
			ngControl="price"
			class="form-control form-control-lg"
			[(ngModel)]="price"
			type = "number">
		</div>
		<div class="col-xs-6 form-group">
		<label>Contact</label>
		<input
			ngControl="contact"
			class="form-control form-control-lg"
			[(ngModel)]="contact"
			type = "text">
		<br>	
		xcoord
		<input
			ngControl="xcoord"
			class="form-control form-control-lg"
			[(ngModel)]="xcoord"
			type = "number">	
		ycoord
		<input
			ngControl="ycoord"
			class="form-control form-control-lg"
			[(ngModel)]="ycoord"
			type = "number">
		<br>
		</div>
		<div class="col-xs-6 form-group">
		<label>Photos</label>
		<input 
			class="form-control form-control-lg"
			enctype="multipart/form-data"
			ngControl="picture"
			type = "file">
		</div>
		<div class="col-xs-6 form-group">
		<button type="submit" class="btn btn-primary btn-lg hvr-glow">Add Item</button>
		</div>
    </form>
    </div>
    </div>
  `
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


    // constructor(params: RouteParams) {
    //     this.activeFilter = params.get('filter');
    // }

    
    clear(): void {
    this.name = '';
  }

  submit(): void {
	
	const allinfo = new Task(this.name, this.description, this.category, this.price, this.contact, this.xcoord, this.ycoord, this.picture);
	
	console.log(this.picture);
	
    if (this.name.length) {
      this.createTask.emit(allinfo);
    }
    this.clear();
  }
}
