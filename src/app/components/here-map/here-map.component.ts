import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';

declare var H: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'here-map',
    templateUrl: 'here-map.component.html'
})
export class HereMapComponent implements OnInit, AfterViewInit {

    @ViewChild('map')
    public mapElement: ElementRef;

    private apiKey = environment.here_apiKey;

    @Input()
    public lat: any;

    @Input()
    public lng: any;

    public constructor() { }

    public ngOnInit() { }

    public ngAfterViewInit() {
        const platform = new H.service.Platform({
            apikey: this.apiKey
        });
        const defaultLayers = platform.createDefaultLayers();
        console.debug(defaultLayers);
        const map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.vector.normal.map,
            // defaultLayers.raster.normal.transit,
            {
                zoom: 10,
                center: { lat: this.lat, lng: this.lng },
                pixelRatio: window.devicePixelRatio || 1
            }
        );
        window.addEventListener('resize', () => map.getViewPort().resize());

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        const provider = map.getBaseLayer().getProvider();

        // Initialize router and geocoder
        const router = platform.getRoutingService();
        const geocoder = platform.getGeocodingService();

        // Create the default UI components
        const ui = H.ui.UI.createDefault(map, defaultLayers);
    }

}
