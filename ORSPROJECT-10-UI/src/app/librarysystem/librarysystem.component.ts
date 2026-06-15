import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-librarysystem',
  templateUrl: './librarysystem.component.html',
  
})
export class LibrarysystemComponent extends BaseCtl {

    constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.librarysystem, locator, route);
    }
  
}
