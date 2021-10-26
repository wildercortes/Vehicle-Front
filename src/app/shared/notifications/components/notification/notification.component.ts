import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INotificationCommand } from '../../models/notification-command';
import { INotification } from '../../models/notification-interface';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private subscription: Subscription;
  private subscriptionRouter: Subscription;
  public notifications: INotification[];


  constructor(private notificationsService: NotificationService) {
    this.notifications = [];
  }


  ngOnInit(): void {
    this.subscription = this.notificationsService.notificationState.subscribe(state => {
      if (state.operation === 'show') {
        this.showNotification(state);
      } else if (state.operation === 'clear') {
        this.clearNotifications();
      }
    });
  }

  private clearNotifications() {
    this.notifications = [];
  }

  private showNotification(state: INotificationCommand) {
    this.notifications = [state.notification];
    if (state.notification.timeout) {
      setTimeout(() => {
        this.notifications.splice(this.notifications.indexOf(state.notification), 1);
      }, 10000);
    }
  }

  hide(i: any) {
    this.notifications.splice(i, 1);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionRouter) {
      this.subscriptionRouter.unsubscribe();
    }
  }

}
