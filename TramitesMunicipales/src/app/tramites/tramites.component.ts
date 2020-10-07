import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {
  titulo: string = "Lista de Trámites";
  prueba: string = "Esto es una prueba de mi componente de trámites"
  constructor() { }

  ngOnInit(): void {
  }

}
