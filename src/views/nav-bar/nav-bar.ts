/**
 * Created by Antony on 2016-06-04.
 */
import { Component, Input } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { AuthRouteHelper, AuthService } from 'src/core/auth';
// import { TaskService } from 'src/core/task';
// import { TaskForm } from './task-form/task-form';
// import { TaskList } from './task-list/task-list';



@Component({
    directives: [
        // TaskForm,
        // TaskList
    ],
    selector: 'navbar',
    template: require ('./nav-bar.html'),
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class NavBar {
    authenticated: boolean;
    authService : AuthService;

    //constructor(private auth: AuthService, private router: Router) {}
    constructor(private auth: AuthService) {
        console.log("auth: "+auth);
        console.log("auth.authenticated: "+auth.authenticated);
        this.authenticated = auth.authenticated;
        this.authService = auth;
        // setTimeout(() => this.updateLoginArea(), 2000);
        // this.updateLoginArea()

    }

    signOut(): void {
        this.auth.signOut();
        window.location.replace('/');
    }


}
