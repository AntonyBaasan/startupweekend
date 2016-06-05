import {Component} from '@angular/core';
import {CanActivate, Router} from '@angular/router-deprecated';


@Component({
    selector: 'footer',
    styles: [
        require('./footer.scss')
    ],
    template: require('./footer.html')
})

export class Footer {
}
