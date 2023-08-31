import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGoogleplacesAutocompleteService } from './ngx-google-places-autocomplete.service';
import { NgxAutocompleteDirective } from './ngx-autocomplete.directive';
export interface GooglePlacesAutocompleteConfig {
  apiKey: string;
}

@NgModule({
  declarations: [
    NgxAutocompleteDirective
  ],
  imports: [
    CommonModule
  ],
  providers:[NgxGoogleplacesAutocompleteService],
  exports:[NgxAutocompleteDirective]
})
export class NgxGooglePlacesAutocompleteModule { 
  static forRoot(config: GooglePlacesAutocompleteConfig): ModuleWithProviders<NgxGooglePlacesAutocompleteModule> {
    return {
      ngModule: NgxGooglePlacesAutocompleteModule,
      providers: [
        { provide: 'config', useValue: config }
      ]
    };
  }
}
