import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { AddCertificateRoutingModule } from './add-certificate-routing.module';
import { AddCertificateComponent } from './add-certificate.component';

@NgModule({
  declarations: [AddCertificateComponent],
  imports: [CommonModule, AddCertificateRoutingModule, InputTextModule],
})
export class AddCertificateModule {}
