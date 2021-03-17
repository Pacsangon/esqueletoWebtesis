import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  
  


  constructor(private rutas: Router) { }

  ngOnInit() {
  }



  buscarEjercicio(termino: string) {
    console.log(termino);
    console.log(typeof(termino));
    console.log(termino.length);
    this.rutas.navigate(['/buscador', termino]);

  }

}

