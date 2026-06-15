import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-securityalertlist',
  templateUrl: './securityalertlist.component.html',
  
})
export class SecurityalertlistComponent extends BaseListCtl {

    constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.SECURITYALERT, locator, route);
    }
  
}
