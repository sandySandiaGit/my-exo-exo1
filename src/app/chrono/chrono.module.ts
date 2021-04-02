import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChronoPageRoutingModule } from './chrono-routing.module';
import { ChronoPage } from './chrono.page';

import { TimeFormatPipe } from '../common/pipes/time-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChronoPageRoutingModule,
   
   

  ],
  declarations: [ChronoPage,TimeFormatPipe]
})
export class ChronoPageModule {}
