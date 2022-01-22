import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { Documents } from 'src/app/interfaces/documents.dto';
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

  getDocs(uid: string): Observable<Documents[]> {
    return this.afs.collection<Documents>(Constants.COLLECTIONS.DOC_COLLECTION, ref => ref.where('uid', '==', uid)).valueChanges()
  }

  async addDocs(doc: Documents, docId: string) {
    return await this.afs.collection(Constants.COLLECTIONS.DOC_COLLECTION).doc(docId).set(doc);
  }
}
