import { Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-metodo-inic',
  templateUrl: './metodo-inic.component.html',
  styleUrls: ['./metodo-inic.component.css']
})
export class MetodoInicComponent implements OnInit {

  //constructor() { }
  public ruta: string ='';

  constructor(@Inject(DOCUMENT) document: any) {

    this.ruta = document.URL
    
    console.log(this.ruta);
   
   }

  ngOnInit() {
  }

}
