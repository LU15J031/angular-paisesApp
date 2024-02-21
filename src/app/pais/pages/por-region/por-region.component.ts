import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
      margin-bottom: 5px;
    }
    `
  ]
})
export class PorRegionComponent  {


  regiones: string[]    = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string  = '';
  paises: Country[] = [];

  constructor( private paisServise: PaisService) { }
  
  getClassCSS(region: string): string {
    return (this.regionActiva === region)? 'btn btn-primary': 'btn btn-outline-primary';   
    } 

  activarRegion(  region: string){
    if(this.regionActiva === region ){return;}
    
    this.regionActiva = region;
    this.paises = [];
    // hacer el llamdo al servicio y subscribirse
    this.paisServise.buscarRegion(this.regionActiva).
    subscribe( paises => this.paises = paises);
  }

}
