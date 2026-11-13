import { Component, inject } from '@angular/core';
import { Catalogo } from '../../servicios/catalogo';
import { TarjetaClase } from '../../componentes/tarjeta-clase/tarjeta-clase';
import { FiltroCategoria } from '../../componentes/filtro-categoria/filtro-categoria';
import { RouterLink } from '@angular/router';

@Component({
  imports: [TarjetaClase, FiltroCategoria, RouterLink],
  selector: 'app-lista-clases',
  styleUrl: './lista-clases.css',
  templateUrl: './lista-clases.html',
})
export class ListaClases {
  protected readonly catalogo = inject(Catalogo)
}
