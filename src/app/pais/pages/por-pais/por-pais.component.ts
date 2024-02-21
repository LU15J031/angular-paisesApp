import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent implements OnInit {
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country [] = [];
  paisesSugeridos: Country [] = [];
  mostrarSugeridos: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino : string) {
    this.mostrarSugeridos = false;
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais(termino).
    subscribe((paises) =>{
      console.log(paises);
      this.paises = paises;
    
    }, err =>{
      this.hayError = true;
      this.paises = [];
    })
    }

    sugerencias(termino: string) {
    this.hayError = false;
    this.termino  = termino;
    this.mostrarSugeridos = true;

    this.paisService.buscarPais(termino)
        .subscribe( paises => this.paisesSugeridos = paises.splice(0,5)
        ,(err)=> this.paisesSugeridos = []
        );
    }

    buscarSugerido( termino: string) {
        this.buscar(termino);
        
      }
      

}
