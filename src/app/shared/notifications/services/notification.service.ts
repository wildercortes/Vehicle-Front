import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { INotificationCommand } from '../models/notification-command';
import { INotification } from '../models/notification-interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject: Subject<INotificationCommand>;
  public notificationState: Observable<INotificationCommand>;

  constructor() {
    this.notificationSubject = new Subject<INotificationCommand>();
    this.notificationState = this.notificationSubject.asObservable();
  }

  public show(notification: INotification) {
    this.notificationSubject.next({
      operation: 'show',
      notification
    });
  }

  public clear() {
    this.notificationSubject.next({
      operation: 'clear',
      notification: null
    });
  }
}
