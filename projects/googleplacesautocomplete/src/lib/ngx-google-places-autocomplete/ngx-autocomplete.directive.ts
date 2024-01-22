import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { NgxGoogleplacesAutocompleteService } from './ngx-google-places-autocomplete.service';
import { IPlace } from './interfaces/IPlace';
import { IBounds } from './interfaces/IOptions';

@Directive({
  selector: '[googleAutoComplete]'
})
export class NgxAutocompleteDirective implements AfterViewInit {

  @Output() addressChange: EventEmitter<IPlace> = new EventEmitter();
  @Input() countries: Array<string> = [];
  @Input() fields: Array<string> = [];
  @Input() bounds:IBounds|null = null;
  @Input() strictBounds: boolean = true;
  autocomplete:any={};
  constructor(private gs: NgxGoogleplacesAutocompleteService, private elementRef: ElementRef) {
  }
  ngAfterViewInit(): void {
    this.initiate()
  }

  private async initiate() {
    this.autocomplete = await this.gs.initializeGooglePlaces(this.elementRef.nativeElement, {});
    if (!this.autocomplete) {
      return
    }
    if (this.countries?.length) {
      this.autocomplete.setComponentRestrictions({
        country: this.countries
      });
    }
    if (this.bounds) {
      this.autocomplete.setBounds(this.bounds);
    }
    if (this.fields.length) {
      this.autocomplete.setFields(this.fields);
    }
    this.autocomplete.setOptions({ strictBounds: this.strictBounds });

    this.autocomplete.addListener("place_changed", async () => {
      const place: IPlace = await this.autocomplete.getPlace()
      this.addressChange.emit(place)
    })
  }

}
