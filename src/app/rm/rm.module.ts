import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmService } from './rm.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [RmService],
  declarations: []
})
export class RmModule { }
