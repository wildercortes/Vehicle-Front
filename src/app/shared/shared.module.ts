import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notifications/components/notification/notification.component';


@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotificationComponent,
    CommonModule
  ],
})
export class SharedModule { }
