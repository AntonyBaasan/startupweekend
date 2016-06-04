import { Component } from '@angular/core';
import { CanActivate, Router } from '@angular/router-deprecated';
import { AuthRouteHelper, AuthService } from 'src/core/auth';


@Component({
  selector: 'main-page',
  styles: [
    require('./main.scss')
  ],
  template: require('./main.html')
})

export class MainPage {
}
