import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allowlist-list',
  templateUrl: './allowlist-list.component.html',
  
})
export class AllowlistListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.ALLOWLIST, locator, route);
    }
  
}
