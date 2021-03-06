import { Component, Input } from '@angular/core';
import { CanActivate, Router } from '@angular/router-deprecated';
import { AuthRouteHelper, AuthService } from 'src/core/auth';


@Component({
  selector: 'searchform-small',
  styles: [
    require('./searchform-small.scss')
  ],
  template: require("./searchform-small.html")
})

@CanActivate(() => AuthRouteHelper.requireUnauth())

export class SearchFormSmall {
	
  visible: boolean

  @Input() searchText: string;

  constructor(private router:Router) {
  }

  clickAdvanced():void{
	this.visible = !this.visible;	
  }

  search(searchText: string):void{
    this.router.navigate(['/Search', { search: searchText }]);
  }


}
