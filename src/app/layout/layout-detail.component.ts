import { Component } from '@angular/core';

import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './layout-detail.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [AuthenticationService]
})
export class LayoutDetailComponent {
  title = 'app works!';

  constructor(private service: AuthenticationService) {
  }

  logout() {
    this.service.logout();
  }
}
