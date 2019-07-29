import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-principal',
  templateUrl: './carousel-principal.component.html',
  styleUrls: ['./carousel-principal.component.css']
})
export class CarouselPrincipalComponent implements OnInit {

  Datos = [
    {
      titulo: 'First slide label',
      subtitulo: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      imagen: './../../../../assets/image-big.png'
    },
    {
      titulo: 'Second slide label',
      subtitulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagen: './../../../../assets/image-big2.png'
    },
    {
      titulo: 'Third slide label',
      subtitulo: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      imagen: './../../../../assets/image-big3.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
