import {Component} from '@angular/core';
import {CanActivate, Router} from '@angular/router-deprecated';
import {AuthRouteHelper, AuthService} from 'src/core/auth';
import { ITask } from 'src/core/task';


@Component({
    selector: 'rented',
    styles: [
        require('./rented.scss')
    ],
    template: require('./rented.html'),
    directives: []
})

export class Rented {
}
