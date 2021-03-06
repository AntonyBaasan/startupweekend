import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from 'src/core/auth';
import { ITask, Task } from './task';


@Injectable()
export class TaskService {
  taskItems$: FirebaseListObservable<ITask[]>;

  constructor(af: AngularFire, auth: AuthService) {
     this.taskItems$ = af.list(`/rents/`) as FirebaseListObservable<ITask[]>;

      console.log("this.taskItems$: "+this.taskItems$);
  }

  createTask(task : ITask): Promise<any> {
    return this.taskItems$.push(task);
  }

  removeTask(task: ITask): Promise<any> {
    return this.taskItems$.remove(task.$key);
  }

  updateTask(task: ITask, changes: any): Promise<any> {
    return this.taskItems$.update(task.$key, changes);
  }
}
