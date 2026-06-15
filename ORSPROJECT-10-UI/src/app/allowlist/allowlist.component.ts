import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allowlist',
  templateUrl: './allowlist.component.html',
  
})
export class AllowlistComponent extends BaseCtl {

    constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.ALLOWLIST, locator, route);
    }
  
}
