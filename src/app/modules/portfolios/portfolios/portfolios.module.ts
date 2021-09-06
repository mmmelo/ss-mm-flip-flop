import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliosRoutingModule } from './portfolios-routing.module';
import {PortfoliosComponent} from './portfolios.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {NgApexchartsModule} from 'ng-apexcharts';
import {TranslocoModule} from '@ngneat/transloco';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [
      PortfoliosComponent,
  ],
  imports: [
    CommonModule,
    PortfoliosRoutingModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatDividerModule,
      MatIconModule,
      MatMenuModule,
      MatProgressBarModule,
      MatRippleModule,
      MatSidenavModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      NgApexchartsModule,
      TranslocoModule,
      SharedModule
  ]
})
export class PortfoliosModule { }
