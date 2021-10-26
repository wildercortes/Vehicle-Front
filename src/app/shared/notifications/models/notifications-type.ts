export class NotificationType {
    public static readonly alertDanger = new NotificationType('alertDanger');
    public static readonly alertSuccess = new NotificationType('alertSuccess');
    public static readonly toastSuccess = new NotificationType('toastSuccess');
  
    constructor(private type: string) { }
  
    public getType() {
      return this.type;
    }
  
  }