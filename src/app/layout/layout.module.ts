import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AdministrarEventoComponent } from './administrar-evento/administrar-evento.component';
import { AdministrarGastosComponent } from './administrar-gastos/administrar-gastos.component';
import { AdministrarPresupuestoComponent } from './administrar-presupuesto/administrar-presupuesto.component';
import { AdministrarVotantesComponent } from './administrar-votantes/administrar-votantes.component';
import { AdministrarLideresComponent } from './administrar-lideres/administrar-lideres.component';
import { ReportesDiaDComponent } from './reportes-dia-d/reportes-dia-d.component';
import { ReportesCampaniaLogisticosComponent } from './reportes-campania-logisticos/reportes-campania-logisticos.component';
import { ReportesCampaniaLocalidadesComponent } from './reportes-campania-localidades/reportes-campania-localidades.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, AdministrarEventoComponent, AdministrarGastosComponent, AdministrarPresupuestoComponent, AdministrarVotantesComponent, AdministrarLideresComponent, ReportesDiaDComponent, ReportesCampaniaLogisticosComponent, ReportesCampaniaLocalidadesComponent]
})
export class LayoutModule {}
