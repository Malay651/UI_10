import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-securityalert',
  templateUrl: './securityalert.component.html',
  
})
export class SecurityalertComponent extends BaseCtl {
      constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
        super(locator.endpoints.SECURITYALERT, locator, route);
      }
    
}
