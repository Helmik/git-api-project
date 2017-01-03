import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [TopNavComponent, NavComponent],
  declarations: [TopNavComponent, NavComponent]
})
export class SharedModule { }
