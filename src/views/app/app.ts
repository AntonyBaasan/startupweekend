import { Component } from '@angular/core';
import { Route, RouteConfig, RouterOutlet } from '@angular/router-deprecated';
import { AuthService } from 'src/core/auth';
import { SignIn } from 'src/views/sign-in';
import { Tasks } from 'src/views/tasks';
import { NavBar } from 'src/views/nav-bar';
import { MainPage } from 'src/views/main';
import { SearchResult } from 'src/views/search-result';
import { Rented } from 'src/views/rented';
import { AppHeader } from './app-header';
import { ConfirmPage } from 'src/views/confirm-purchase';


@RouteConfig([
  new Route({path: '/', component: MainPage, name: 'MainPage'}),
  new Route({path: '/search', component: SearchResult, name: 'Search'}),
  new Route({path: '/signin', component: SignIn, name: 'SignIn'}),
  new Route({path: '/tasks', component: Tasks, name: 'Tasks'}),
  new Route({path: '/rented', component: Rented, name: 'Rented'})
  new Route({path: '/confirm', component: ConfirmPage, name: 'confirmPage'})
])

@Component({
  directives: [
    AppHeader,
    NavBar,
    RouterOutlet
  ],
  selector: 'app',
  styles: [
    require('./app.scss')
  ],
  template: `
    <app-header
      [authenticated]="auth.authenticated"
      (signOut)="signOut()">      
    </app-header>
    
    <navbar></navbar>
    
    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `
})

export class App {
  constructor(private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
}
