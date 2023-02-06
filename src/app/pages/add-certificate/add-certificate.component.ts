import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Certificates } from 'src/app/shared/models/certificates.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCertificateComponent {
  certificatesGroup = new FormGroup({
    shipName: new FormControl<string>('', Validators.required),
    classStatutory: new FormControl<Date | null>(null, Validators.required),
    iopp: new FormControl<Date | null>(null, Validators.required),
    bwm: new FormControl<Date | null>(null, Validators.required),
    dd: new FormControl<Date | null>(null, Validators.required),
    ism: new FormControl<Date | null>(null, Validators.required),
    isps: new FormControl<Date | null>(null, Validators.required),
    mlc: new FormControl<Date | null>(null, Validators.required),
    doc: new FormControl<Date | null>(null, Validators.required),
    ihm: new FormControl<Date | null>(null, Validators.required),
  });

  constructor(private firestoreService: FirestoreService) {}

  onSubmit(): void {
    this.firestoreService.submitCertificates(this.setCertificatesData());
  }

  setCertificatesData(): Certificates {
    const formValue = this.certificatesGroup.getRawValue();
    const certificates: Certificates = {
      shipName: formValue.shipName || '',
      classStatutory: formValue.classStatutory || new Date(),
      iopp: formValue.iopp || new Date(),
      bwm: formValue.bwm || new Date(),
      dd: formValue.dd || new Date(),
      ism: formValue.ism || new Date(),
      isps: formValue.isps || new Date(),
      mlc: formValue.mlc || new Date(),
      doc: formValue.doc || new Date(),
      ihm: formValue.ihm || new Date(),
    };

    return certificates;
  }
}
