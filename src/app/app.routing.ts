//import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './component/inicio/inicio.component';
import { MetodologiaComponent } from './component/metodologia/metodologia.component';
import { ResultadosComponent } from './component/resultados/resultados.component';
import { ConclusionesComponent } from './component/conclusiones/conclusiones.component';
import { InfoejercicioComponent } from './component/infoejercicio/infoejercicio.component';
import { BuscadorEjercicioComponent } from './component/buscador-ejercicio/buscador-ejercicio.component';
import { PlanteIniComponent } from './component/elemtmetolg/plante-ini/plante-ini.component';
import { PropTrabComponent } from './component/elemtmetolg/prop-trab/prop-trab.component';
import { TrabajoDeCampoComponent } from './component/elemtmetolg/trabajo-de-campo/trabajo-de-campo.component';
import { CompleMetodComponent } from './component/elemtmetolg/comple-metod/comple-metod.component'
import { ResultadosinicialesComponent } from './component/elemtmetolg/resultadosiniciales/resultadosiniciales.component';
import { PropuestaComponent } from './component/propuesta/propuesta.component';
import { VideosComponent } from './component/videos/videos.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent}, 
    { path: 'metodologia', component: MetodologiaComponent, children:[
        { path: '', component: CompleMetodComponent, outlet: 'segundorouter' },
        { path: 'planteamientoinicial', component: PlanteIniComponent, outlet: 'segundorouter' },
        { path: 'resultadosiniciales', component: ResultadosinicialesComponent, outlet: 'segundorouter' },
        { path: 'propuestatrabajo', component: PropTrabComponent, outlet: 'segundorouter' },
        { path: 'trabajocampo', component: TrabajoDeCampoComponent, outlet: 'segundorouter' } 
    ] },
    { path: 'resultados', component: ResultadosComponent },
    { path: 'conclusiones', component: ConclusionesComponent },
    { path: 'ejercicio/:id', component: InfoejercicioComponent },
    { path: 'buscador/:nombre', component: BuscadorEjercicioComponent },
    { path: 'propuesta', component: PropuestaComponent },
    { path: 'videos', component: VideosComponent },
    { path: '**',  redirectTo: 'inicio' }
];


export const TESIS_ROUTING = RouterModule.forRoot(routes);
