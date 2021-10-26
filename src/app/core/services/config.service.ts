import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;
  private loaded = false;
  public defaultTheme = true;
  public user: string;

  constructor(private http: HttpClient) { }

  load(): Promise<any> {
    if (!this.loaded) {
      return new Promise((resolve, reject) => {
        this.http.get('./assets/appsetting.json')
          .subscribe(config => {
            this.config = config;
            this.loaded = true;
            resolve(this.config);
          });
      });
    }
  }

  public getProperty(property: string): any {
    return this.config[property];
  }

  public changeTheme(theme: string) {
    if (theme === 'ligth') {
        this.defaultTheme = true;
        localStorage.setItem(this.user, 'light');
    } else {
        this.defaultTheme = false;
        localStorage.setItem(this.user, 'dark');
    }
  }

  public setUser(user: any) {
    this.user = user;
    if (localStorage.getItem(user)) {
        this.defaultTheme = localStorage.getItem(user) === 'light';
    }
  }
}
