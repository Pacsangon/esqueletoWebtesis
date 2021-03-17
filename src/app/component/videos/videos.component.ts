import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  parrafo = "Esto sirve solo como referencia para conocer la respiración diafragmática algo que desconozco y superaba mis conocimientos.";
  video = "./assets/video/ejercicios/...";
  

  subtitulo = "1.respiración diafragmática";
  subtitulo2 = "2.respiración con papel";
  subtitulo3 = "3.respiración con vela";
  subtitulo4 = "4.respiración con globo";
  subtitulo5 = "5.Ejercitación de labios usando trompetillas";
  subtitulo6 = "6.ejercitación de lengua con R";
  subtitulo7 = "7.gesticulación usando BUE";

  constructor() { }

  ngOnInit() {
  }

}
