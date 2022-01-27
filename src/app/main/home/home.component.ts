import { AdminService } from './../../admin/services/admin.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Documents } from 'src/app/interfaces/documents.dto';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NotifyService } from 'src/app/notifications/notify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  types = ['CPF', 'RG', 'Carteira de motorista'];
  documents$?: Observable<Documents[]>
  subscription = new Subscription
  meta?: Observable<any>;
  constructor(
    private auth: AuthService,
    private router: Router,
    private fireAuth: AngularFireAuth,
    private adminService: AdminService,
    private notify: NotifyService
  ) { }

  ngOnInit(): void {
    const user = this.fireAuth.authState.subscribe((user) => {
      console.log(user?.uid);

      this.documents$ = this.adminService.getDocs(user?.uid!)
    });
    this.subscription.add(user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription = new Subscription;
  }

  categoria(evt: any) {
    const user = this.fireAuth.authState.subscribe((user) => {
      if (evt.value == 'Todos') {
        this.documents$ = this.adminService.getDocs(user?.uid!)
      } else {
        this.documents$ = this.adminService.getDocsFilter(user?.uid!, evt.value)
      }
    });
    this.subscription.add(user);
  }

  async handleLogout() {
    try {
      await this.auth.signOutService();
      this.router.navigateByUrl('/signin', { replaceUrl: true });
    } catch (err) {
      this.notify.notifications(err as string);
    }
  }

  openPdf(url: string) {
    window.open(url);
  }

}
