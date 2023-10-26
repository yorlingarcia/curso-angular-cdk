import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FontAwesomeModule,
    OverlayModule,
    SharedModule,
  ],
  exports: [NavbarComponent],
})
export class LayoutModule {}
