import { Component } from '@angular/core';
import { CanActivate, Router } from '@angular/router-deprecated';
import { AuthRouteHelper, AuthService } from 'src/core/auth';


@Component({
  selector: 'search-result',
  styles: [
    require('./search-result.scss')
  ],
  template: require('./search-result.html')
})

export class SearchResult {
}
