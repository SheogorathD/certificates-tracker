import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Certificates } from '../models/certificates.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private afStore: AngularFirestore) {}

  submitCertificates(certificates: Certificates) {
    const generatedId = this.afStore.createId();
    this.afStore
      .doc<Certificates>(`certificates/${generatedId}`)
      .set(certificates);
  }
}
