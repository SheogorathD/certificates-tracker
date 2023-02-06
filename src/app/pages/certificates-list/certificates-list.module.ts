import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CertificatesListRoutingModule } from './certificates-list-routing.module';
import { CertificatesListComponent } from './certificates-list.component';

@NgModule({
  declarations: [CertificatesListComponent],
  imports: [CommonModule, CertificatesListRoutingModule],
})
export class CertificatesListModule {}
