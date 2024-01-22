import { Inject, Injectable, Optional } from '@angular/core';
import { GooglePlacesAutocompleteConfig } from './ngx-google-places-autocomplete.module';
declare var google: any;
@Injectable({
  providedIn: 'root'
})
export class NgxGoogleplacesAutocompleteService {
  private scriptElement!: HTMLScriptElement;
  autocomplete: any;
  constructor(@Inject('config') @Optional() private config: GooglePlacesAutocompleteConfig) {
  }

  async initializeGooglePlaces(inputElement:HTMLInputElement,options?:any) {
    try {
       const loaded =  await this.loadScript();
       if(!loaded){
        return  false
       }
       this.autocomplete = new google.maps.places.Autocomplete(inputElement, options); 
       return this.autocomplete
    } catch (error) {
      console.error('Error loading Google Places API:', error);
      return false;
    }
  }

  private async loadScript() {
    if (!this.config?.apiKey) {
      console.error('Please provide api key for google autocomplete')
      return false
    }
    if(this.scriptElement?.src){
      return true
    }
    return new Promise((resolve, reject) => {
      this.scriptElement = document.createElement('script');
      this.scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=${this.config.apiKey}&libraries=places&callback=Function.prototype`;
      this.scriptElement.onload = resolve;
      this.scriptElement.onerror = reject;
      document.head.appendChild(this.scriptElement);
    })
  }

}
