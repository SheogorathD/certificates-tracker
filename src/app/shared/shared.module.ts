import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { CertificateCardComponent } from './components/certificate-card/certificate-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [TabMenuModule, MenuModule, TableModule],
  declarations: [NavbarComponent, CertificateCardComponent],
  exports: [NavbarComponent, CertificateCardComponent],
})
export class SharedModule {}
