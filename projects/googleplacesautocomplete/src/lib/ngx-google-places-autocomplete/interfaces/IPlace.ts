
export interface IPlace {
    address_components?: Array<IGeocoderAddressComponent>;
    adr_address?:string;
    aspects?:any
    business_status?:any
    formatted_address?:string;
    formatted_phone_number?:string;
    geometry?:GeocoderGeometry;
    html_attributions?:Array<string>;
    icon?:string;
    name?:string;
    opening_hours?:any;
    photos?:Array<any>;
    place_id?:string;
    plus_code?:any;
    rating?:number;
    reviews?:Array<any>;
    types?:Array<string>;
    url?:string;
    user_ratings_total?:number;
    vicinity?:string
    partial_match?:boolean;
    website?:string
}

interface IGeocoderAddressComponent {
    long_name: string;
    short_name: string
    types: Array<string>
}

interface GeocoderGeometry{
    location:any,
    location_type: any
    viewport:any
    bounds?:any
}
