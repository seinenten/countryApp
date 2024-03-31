import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public pais: Country[] = []
  public initialValue: string = '';

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.pais = this.countriesService.cacheStore.byPais.countries ;
    this.initialValue = this.countriesService.cacheStore.byPais.term;
  }

  searchPorPais( term: string ):void{
    this.countriesService.searchPorPais(term)
        .subscribe( pais => {
          this.pais = pais;
        })
  }

}
