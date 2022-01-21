import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { UserAdmin } from 'src/app/interfaces/user.dto';
import * as Constants from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private afs: AngularFirestore) { }

  async createAdmin(docId: string, data: UserAdmin) {
    return await this.afs.collection(Constants.COLLECTIONS.USER_COLLECTION).doc(docId).set(data);
  }

  getUsers(): Observable<UserAdmin[]> {
    return this.afs.collection<UserAdmin>(Constants.COLLECTIONS.USER_COLLECTION).valueChanges()
  }
}
