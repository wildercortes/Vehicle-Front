import { NotificationType } from './notifications-type';

export interface INotification {
  type: NotificationType;
  timeout?: boolean;
  timeoutTime?: number;
  progressBar?: boolean;
  closeButton?: boolean;
  width?: number;
  data: any;
}