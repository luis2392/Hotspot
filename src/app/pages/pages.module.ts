import { NgModule} from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import {FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// PIPES
import { PipesModule } from '../pipes/pipes.module';

// ng2 charts, libreria para graficar.
import { ChartsModule } from 'ng2-charts';


import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ // Registrar cada componente
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        EncuestasComponent,
        ProfileComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],

    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]

})

export class PagesModule { }
