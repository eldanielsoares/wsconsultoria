import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private notify: MatSnackBar) { }

  notifications(msg: string) {
    this.notify.open(msg, 'Ok', { duration: 3000 })
  }
}
