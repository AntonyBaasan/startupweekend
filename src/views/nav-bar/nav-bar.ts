/**
 * Created by Antony on 2016-06-04.
 */
import { Component } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
// import { AuthRouteHelper } from 'src/core/auth';
// import { TaskService } from 'src/core/task';
// import { TaskForm } from './task-form/task-form';
// import { TaskList } from './task-list/task-list';


@Component({
    directives: [
        // TaskForm,
        // TaskList
    ],
    selector: 'navbar',
    template: require ('./nav-bar.html')
})

// @CanActivate(() => AuthRouteHelper.requireAuth())

export class NavBar {

}
