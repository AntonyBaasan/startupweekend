import {Component} from '@angular/core';
import {CanActivate, Router} from '@angular/router-deprecated';
import {AuthRouteHelper, AuthService} from 'src/core/auth';
import {SearchForm} from 'src/views/search-form';


@Component({
    selector: 'main-page',
    styles: [
        require('./main.scss')
    ],
    template: require('./main.html'),
    directives: [SearchForm]
})

export class MainPage {
}
