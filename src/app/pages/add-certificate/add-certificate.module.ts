import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCertificateRoutingModule } from './add-certificate-routing.module';
import { AddCertificateComponent } from './add-certificate.component';


@NgModule({
  declarations: [AddCertificateComponent],
  imports: [
    CommonModule,
    AddCertificateRoutingModule
  ]
})
export class AddCertificateModule { }
