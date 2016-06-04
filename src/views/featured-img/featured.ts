import {Component} from '@angular/core';
import {CanActivate, Router} from '@angular/router-deprecated';


@Component({
    selector: 'featured-imgs',
    styles: [
        require('./featured.scss')
    ],
    template: require('./featured.html')
})

export class Featured {
}
