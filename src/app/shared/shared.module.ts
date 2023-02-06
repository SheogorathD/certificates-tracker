import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CertificateCardComponent } from './components/certificate-card/certificate-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [MenubarModule, MenuModule],
  declarations: [NavbarComponent, CertificateCardComponent],
  exports: [NavbarComponent, CertificateCardComponent],
})
export class SharedModule {}
