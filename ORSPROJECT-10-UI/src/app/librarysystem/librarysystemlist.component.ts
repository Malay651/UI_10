import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-librarysystemlist',
  templateUrl: './librarysystemlist.component.html',
  
})
export class LibrarysystemlistComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.librarysystem, locator, route);
    }
  
}
