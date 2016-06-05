import {Component} from '@angular/core';
import {CanActivate, Router} from '@angular/router-deprecated';

@Component({
    selector: 'pricing-page',
    styles: [
        require('./pricing.scss')
    ],
    template: require('./pricing.html')
})

export class PricingPage {
}
