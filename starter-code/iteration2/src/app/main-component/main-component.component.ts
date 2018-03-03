import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title: string = 'Learn how to code with Ironhack';
  imageURL: string = 'https://pbs.twimg.com/media/CiHN8hVWUAAKxaK.jpg';
  description: string = 'Lorem fistrum me cago en tus muelas por la gloria de mi madre pecador caballo blanco caballo negroorl no puedor jarl pupita hasta luego Lucas diodeno. Diodeno hasta luego Lucas fistro amatomaa la caidita a peich te va a hasé pupitaa ese que llega no te digo trigo por no llamarte Rodrigor pecador no puedor. Jarl fistro benemeritaar ahorarr papaar papaar. A wan de la pradera papaar papaar no puedor tiene musho peligro sexuarl ese hombree me cago en tus muelas al ataquerl. Caballo blanco caballo negroorl apetecan va usté muy cargadoo a peich caballo blanco caballo negroorl me cago en tus muelas me cago en tus muelas.'

  constructor() { }

  ngOnInit() {
  }

}
