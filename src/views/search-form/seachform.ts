import { Component, Input } from '@angular/core';
import { CanActivate, Router } from '@angular/router-deprecated';
import { AuthRouteHelper, AuthService } from 'src/core/auth';


@Component({
  selector: 'searchform',
  styles: [
    require('./searchform.scss')
  ],
  template: require("./searchform.html")
})

@CanActivate(() => AuthRouteHelper.requireUnauth())

export class SearchForm {
	
  visible: boolean

  @Input() searchText: string;

  clickAdvanced():void{
	this.visible = !this.visible;	
  }

}
