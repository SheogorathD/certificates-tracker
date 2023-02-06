import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'certificates',
    loadChildren: () =>
      import('./pages/certificates-list/certificates-list.module').then(
        (m) => m.CertificatesListModule
      ),
  },
  {
    path: 'add-certificate',
    loadChildren: () =>
      import('./pages/add-certificate/add-certificate.module').then(
        (m) => m.AddCertificateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
