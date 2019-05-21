import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarEventoComponent } from './administrar-evento.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
    imports: [CommonModule, PageHeaderModule],
    declarations: [AdministrarEventoComponent],
    exports: [AdministrarEventoComponent]
})
export class AdministrarEventoModule { }
