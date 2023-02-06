import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AddCertificateRoutingModule } from './add-certificate-routing.module';
import { AddCertificateComponent } from './add-certificate.component';

@NgModule({
  declarations: [AddCertificateComponent],
  imports: [
    CommonModule,
    AddCertificateRoutingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
})
export class AddCertificateModule {}
