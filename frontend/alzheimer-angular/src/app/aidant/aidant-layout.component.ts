import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import keycloak from '../keycloak';

@Component({
  selector: 'app-aidant-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, TranslateModule],
  templateUrl: './aidant-layout.component.html',
  styleUrls: ['./aidant-layout.component.css']
})
export class AidantLayoutComponent {
  aidantName = keycloak.tokenParsed?.['name'] || keycloak.tokenParsed?.['preferred_username'] || 'Aidant';
}
