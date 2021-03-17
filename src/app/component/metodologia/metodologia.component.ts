import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-metodologia',
  templateUrl: './metodologia.component.html',
  styleUrls: ['./metodologia.component.css']
})
export class MetodologiaComponent implements OnInit {

  

  
  

  public ruta: string ='';

  constructor(@Inject(DOCUMENT) document: any) {

     this.ruta = document.URL
     
     console.log(document.URL);
    
    }
    

    ngOnInit() {
      
      
    }

  /* constructor() { }

  ngOnInit() {
  }

}*/


 
  



}