import { Component } from '@angular/core';
import { MdMenu, MdMenuTrigger } from "@angular/material";
import { ViewChild } from '@angular/core';

import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './layout-detail.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [AuthenticationService]
})
export class LayoutDetailComponent {
  title = 'app works!';

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  constructor(private service: AuthenticationService) {
  }

  logout() {
    this.service.logout();
  }

  someMethod() {
    this.trigger.openMenu();
  }
}
