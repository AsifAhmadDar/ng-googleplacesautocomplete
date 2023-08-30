import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleplacesAutocompleteService } from './google-places-autocomplete.service';
import { AutocompleteDirective } from './autocomplete.directive';
export interface GooglePlacesAutocompleteConfig {
  apiKey: string;
}

@NgModule({
  declarations: [
    AutocompleteDirective
  ],
  imports: [
    CommonModule
  ],
  providers:[GoogleplacesAutocompleteService],
  exports:[AutocompleteDirective]
})
export class GooglePlacesAutocompleteModule { 
  static forRoot(config: GooglePlacesAutocompleteConfig): ModuleWithProviders<GooglePlacesAutocompleteModule> {
    return {
      ngModule: GooglePlacesAutocompleteModule,
      providers: [
        { provide: 'config', useValue: config }
      ]
    };
  }
}
