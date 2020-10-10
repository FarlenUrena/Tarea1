import { Component, OnInit } from '@angular/core';
import { TramitesTipos } from './tramites-tipos';
import { TramitesTiposService } from './tramites-tipos.service';
@Component({ templateUrl: 'tramites-tipos.component.html' })
@Component({
  selector: 'app-tramites-tipos',
  templateUrl: './tramites-tipos.component.html',
  styleUrls: ['./tramites-tipos.component.css']
})
export class TramitesTiposComponent implements OnInit {
  titulo: string = "Lista de Trámites";
  prueba: string = "Esto es una prueba de mi componente Trámites"

  tramitesTipos: TramitesTipos[];

  constructor(private tramitesTiposService: TramitesTiposService) { }

  ngOnInit(): void {
    this.tramitesTiposService.getAll().subscribe(
      t => this.tramitesTipos = t
    );
  }
}
