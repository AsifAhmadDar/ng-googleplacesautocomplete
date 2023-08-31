# ngx-gp-autocomplete
<p align="center">
  <img alt="Ngx-Markdown Logo" src="https://ngx-validator.angularmagic.com/assets/cover.png">
</p>

**Demo: https://ngx-gp-autocomplete.angularmagic.com**

This module is a wrapper for Google Places Autocomplete js library. Initial code base was copied from this project
[ngx-google-places-autocomplete](https://www.npmjs.com/package/ngx-google-places-autocomplete), this module applies some fixes and improvements.
Like [@types/google.maps](https://www.npmjs.com/package/@types/google.maps) and [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader)

[![NPM](https://nodei.co/npm/@angular-magic/ngx-gp-autocomplete.png)](https://nodei.co/npm/@angular-magic/ngx-gp-autocomplete/)

# Installation
#### npm
```
npm install @angular-magic/ngx-gp-autocomplete
```

```
npm install @googlemaps/js-api-loader
```

```
npm install --save @types/google.maps
```


# Integration
1. Import NgxGooglePlacesAutocompleteModule into your application module

```ts
import { NgxGooglePlacesAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";

@NgModule({
  imports: [
    NgxGooglePlacesAutocompleteModule.forRoot({ 
      loaderOptions: { 
            apiKey: 'YOUR_API_KEY'
        } 
    }),
    BrowserModule,
    FormsModule,
    ...],
  ....
})
```
2. Replace YOUR_API_KEY with google places api key. Ref - https://developers.google.com/places/web-service/get-api-key

2. Add directive googleAutoComplete to your input field (options is an optional parameter)
```
<input googleAutoComplete [options]='options' (addressChange)="handleAddressChange($event)"/>
```
        public handleAddressChange(place: IPlace) {
        // Do some stuff
    }
```

# GitHub
Please feel free to declare issues or contribute: https://github.com/AsifAhmadDar/ng-googleplacesautocomplete