/**
 * Created by Antony on 2016-06-04.
 */
import { Component, Input } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { AuthRouteHelper, AuthService } from 'src/core/auth';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
// import { TaskService } from 'src/core/task';
// import { TaskForm } from './task-form/task-form';
// import { TaskList } from './task-list/task-list';



@Component({
    directives: [
        // TaskForm,
        // TaskList,
        ROUTER_DIRECTIVES
    ],
    selector: 'navbar',
    template: require ('./nav-bar.html'),
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class NavBar {
    authenticated: boolean;
    authService : AuthService;//TODO: Huuuge error with Sevice state, Anuglar2 BUG

    constructor(private router:Router, private auth: AuthService) {
        console.log("auth: "+auth);
        console.log("auth.authenticated: "+auth.authenticated);
        this.authenticated = auth.authenticated;
        this.authService = auth;
    }

    search(searchText: string):void{
        this.router.navigate(['/Search', { search: searchText }]);
    }

    signOut(): void {
        this.auth.signOut();
        window.location.replace('/');
    }


}
