import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular-6-datatable';


//Importar Servicios
import { EjerciciosService } from './services/ejercicios.service';
import { DatosecService } from './services/datosec.service';

//Importar rutas
import { TESIS_ROUTING } from "./app.routing";

//Importar componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { MetodologiaComponent } from './component/metodologia/metodologia.component';
import { InfoejercicioComponent } from './component/infoejercicio/infoejercicio.component';
import { BuscadorEjercicioComponent } from './component/buscador-ejercicio/buscador-ejercicio.component';
import { NgbCarouselComponent } from './component/elemtinic/ngb-carousel/ngb-carousel.component';
import { NgbdTabsetJustifyComponent } from './component/elemtmetolg/ngbd-tabset-justify/ngbd-tabset-justify.component';
import { PrincipiosComponent } from './component/elemtmetolg/principios/principios.component';
import { PreselecciontecnicasComponent } from './component/elemtmetolg/preselecciontecnicas/preselecciontecnicas.component';
import { EjemplocaldeamientoComponent } from './component/elemtmetolg/ejemplocaldeamiento/ejemplocaldeamiento.component';
import { TablacaldeamientoComponent } from './component/elemtmetolg/tablacaldeamiento/tablacaldeamiento.component';
import { TablambosComponent } from './component/elemtmetolg/tablambos/tablambos.component';
import { TablamodoComponent } from './component/elemtmetolg/tablamodo/tablamodo.component';
import { TablatemasComponent } from './component/elemtmetolg/tablatemas/tablatemas.component';
import { TablarelacionadosComponent } from './component/elemtmetolg/tablarelacionados/tablarelacionados.component';
import { PillspreselecciontecnicasComponent } from './component/elemtmetolg/pillspreselecciontecnicas/pillspreselecciontecnicas.component';
import { FiltroDatosPipe } from './pipes/filtro-datos.pipe';
import { AcordioncriteriosejComponent } from './component/elemtmetolg/acordioncriteriosej/acordioncriteriosej.component';
import { TablasentirtodoComponent } from './component/elemtmetolg/tablasentirtodo/tablasentirtodo.component';
import { TablasentirtodoejerciciosgeneralesComponent } from './component/elemtmetolg/tablasentirtodoejerciciosgenerales/tablasentirtodoejerciciosgenerales.component';
import { TablasentirtodocaminatasComponent } from './component/elemtmetolg/tablasentirtodocaminatas/tablasentirtodocaminatas.component';
import { TablasentirtodomasajesComponent } from './component/elemtmetolg/tablasentirtodomasajes/tablasentirtodomasajes.component';
import { TablasentirtodojuegosintegracionComponent } from './component/elemtmetolg/tablasentirtodojuegosintegracion/tablasentirtodojuegosintegracion.component';
import { TablasentirtodogravedadComponent } from './component/elemtmetolg/tablasentirtodogravedad/tablasentirtodogravedad.component';
import { PillescuchartodooyeComponent } from './component/elemtmetolg/pillescuchartodooye/pillescuchartodooye.component';
import { TablaescuchartodooyejerciciosyrtmosComponent } from './component/elemtmetolg/tablaescuchartodooyejerciciosyrtmos/tablaescuchartodooyejerciciosyrtmos.component';
import { TablaescuchartodooyemelodiaComponent } from './component/elemtmetolg/tablaescuchartodooyemelodia/tablaescuchartodooyemelodia.component';
import { TablaescuchartodooyesonidoComponent } from './component/elemtmetolg/tablaescuchartodooyesonido/tablaescuchartodooyesonido.component';
import { TablaescuchartodooyeritmorespiracionComponent } from './component/elemtmetolg/tablaescuchartodooyeritmorespiracion/tablaescuchartodooyeritmorespiracion.component';
import { TablaescuchartodooyeritmosinternosComponent } from './component/elemtmetolg/tablaescuchartodooyeritmosinternos/tablaescuchartodooyeritmosinternos.component';
import { PillactivardistintosentidosComponent } from './component/elemtmetolg/pillactivardistintosentidos/pillactivardistintosentidos.component';
import { TablaserieciegoComponent } from './component/elemtmetolg/tablaserieciego/tablaserieciego.component';
import { TablaseriespacioComponent } from './component/elemtmetolg/tablaseriespacio/tablaseriespacio.component';
import { PillsvertodoloquesemiraComponent } from './component/elemtmetolg/pillsvertodoloquesemira/pillsvertodoloquesemira.component';
import { TablasecuenciaespejoComponent } from './component/elemtmetolg/tablasecuenciaespejo/tablasecuenciaespejo.component';
import { TablasecuenciamodeladoComponent } from './component/elemtmetolg/tablasecuenciamodelado/tablasecuenciamodelado.component';
import { TablasecuenciaimageneslenguajesComponent } from './component/elemtmetolg/tablasecuenciaimageneslenguajes/tablasecuenciaimageneslenguajes.component';
import { TablasecuenciajuegosmascarasritualesComponent } from './component/elemtmetolg/tablasecuenciajuegosmascarasrituales/tablasecuenciajuegosmascarasrituales.component';
import { TablasecuenciainvencionespacioestructurComponent } from './component/elemtmetolg/tablasecuenciainvencionespacioestructur/tablasecuenciainvencionespacioestructur.component';
import { TablasjuegosextravertidosComponent } from './component/elemtmetolg/tablasjuegosextravertidos/tablasjuegosextravertidos.component';
import { PillstablamemoriasentidosComponent } from './component/elemtmetolg/pillstablamemoriasentidos/pillstablamemoriasentidos.component';
import { TablamemoriaemoComponent } from './component/elemtmetolg/tablamemoriaemo/tablamemoriaemo.component';
import { MenuMetodologiaComponent } from './component/elemtmetolg/menu-metodologia/menu-metodologia.component';
import { ResultadosComponent } from './component/resultados/resultados.component';
import { ConclusionesComponent } from './component/conclusiones/conclusiones.component';
import { RevisiondocComponent } from './component/elemtmetolg/revisiondoc/revisiondoc.component';
import { MetodoInicComponent } from './component/elemtmetolg/metodo-inic/metodo-inic.component';
import { PlanteIniComponent } from './component/elemtmetolg/plante-ini/plante-ini.component';
import { PropTrabComponent } from './component/elemtmetolg/prop-trab/prop-trab.component';
import { TrabajoDeCampoComponent } from './component/elemtmetolg/trabajo-de-campo/trabajo-de-campo.component';
import { CompleMetodComponent } from './component/elemtmetolg/comple-metod/comple-metod.component';
import { ResultadosinicialesComponent } from './component/elemtmetolg/resultadosiniciales/resultadosiniciales.component';
import { ResultadocampoComponent } from './component/elemresul/resultadocampo/resultadocampo.component';
import { ComponentelemtinicnavinicioComponent } from './component/elemtinic/navinicio/componentelemtinicnavinicio.component';
import { AntecedentesComponent } from './component/elemtinic/antecedentes/antecedentes.component';
import { ProblemaComponent } from './component/elemtinic/problema/problema.component';
import { MarcoteoricoComponent } from './component/elemtinic/marcoteorico/marcoteorico.component';
import { PropuestaComponent } from './component/propuesta/propuesta.component';
import { NubedepalabrasComponent } from './component/imagenes/nubedepalabras/nubedepalabras.component';
import { VideosComponent } from './component/videos/videos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    MetodologiaComponent,
    InfoejercicioComponent,
    BuscadorEjercicioComponent,
    NgbCarouselComponent,
    NgbdTabsetJustifyComponent,
    PrincipiosComponent,
    PreselecciontecnicasComponent,
    EjemplocaldeamientoComponent,
    TablacaldeamientoComponent,
    TablambosComponent,
    TablamodoComponent,
    TablatemasComponent,
    TablarelacionadosComponent,
    PillspreselecciontecnicasComponent,
    FiltroDatosPipe,
    AcordioncriteriosejComponent,
    TablasentirtodoComponent,
    TablasentirtodoejerciciosgeneralesComponent,
    TablasentirtodocaminatasComponent,
    TablasentirtodomasajesComponent,
    TablasentirtodojuegosintegracionComponent,
    TablasentirtodogravedadComponent,
    PillescuchartodooyeComponent,
    TablaescuchartodooyejerciciosyrtmosComponent,
    TablaescuchartodooyemelodiaComponent,
    TablaescuchartodooyesonidoComponent,
    TablaescuchartodooyeritmorespiracionComponent,
    TablaescuchartodooyeritmosinternosComponent,
    PillactivardistintosentidosComponent,
    TablaserieciegoComponent,
    TablaseriespacioComponent,
    PillsvertodoloquesemiraComponent,
    TablasecuenciaespejoComponent,
    TablasecuenciamodeladoComponent,
    TablasecuenciaimageneslenguajesComponent,
    TablasecuenciajuegosmascarasritualesComponent,
    TablasecuenciainvencionespacioestructurComponent,
    TablasjuegosextravertidosComponent,
    PillstablamemoriasentidosComponent,
    TablamemoriaemoComponent,
    MenuMetodologiaComponent,
    ResultadosComponent,
    ConclusionesComponent,
    RevisiondocComponent,
    MetodoInicComponent,
    PlanteIniComponent,
    PropTrabComponent,
    TrabajoDeCampoComponent,
    CompleMetodComponent,
    ResultadosinicialesComponent,
    ResultadocampoComponent,
    ComponentelemtinicnavinicioComponent,
    AntecedentesComponent,
    ProblemaComponent,
    MarcoteoricoComponent,
    PropuestaComponent,
    NubedepalabrasComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgbModule.forRoot(),
    HttpModule,
    DataTableModule,
    ReactiveFormsModule,
    TESIS_ROUTING
  ],
  providers: [
    EjerciciosService,
    DatosecService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
