import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';

declare var H: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'here-map',
    templateUrl: 'here-map.component.html'
})
export class HereMapComponent implements OnInit, AfterViewInit {
    map: any;
    marker: any;
    mLat: any;
    mLng: any;
    cLng: string;

    @ViewChild('map')
    public mapElement: ElementRef;

    private apiKey = environment.here_apiKey;
    cLat: string;

    @Input()
    public set centerLat(marker: string) {
        this.cLat = marker;
        this.setCenter();
    }

    @Input()
    public set centerLng(marker: string) {
        this.cLng = marker;
        this.setCenter();
    }

    @Input()
    public set markerLat(marker: string) {
        this.mLat = marker;
        this.setMarker();
    }

    @Input()
    public set markerLng(marker: string) {
        this.mLng = marker;
        this.setMarker();
    }

    public constructor() { }

    public ngOnInit() { }

    public ngAfterViewInit() {
        const platform = new H.service.Platform({
            apikey: this.apiKey
        });
        const defaultLayers = platform.createDefaultLayers();
        this.map = new H.Map(
            this.mapElement.nativeElement,
            // defaultLayers.vector.normal.map,
            defaultLayers.raster.normal.transit,
            {
                zoom: 11,
                center: { lat: 53.510558, lng: 9.9035652 },
                pixelRatio: window.devicePixelRatio || 1
            }
        );
        window.addEventListener('resize', () => this.map.getViewPort().resize());

        // HACK
        setTimeout(() => {
            if (this.mLat && this.mLng) {
                this.setMarker();
                this.setCenter();
            }
            this.map.getViewPort().resize();
        }, 1000);


        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
        behavior.disable(H.mapevents.Behavior.WHEELZOOM);
        const provider = this.map.getBaseLayer().getProvider();

        // Initialize router and geocoder
        const router = platform.getRoutingService();
        const geocoder = platform.getGeocodingService();

        // Create the default UI components
        const ui = H.ui.UI.createDefault(this.map, defaultLayers);
    }


    private setMarker() {
        if (this.map && this.mLat && this.mLng) {
            if (this.marker) {
                this.map.removeObject(this.marker);
            }
            this.marker = new H.map.Marker({ lat: this.mLat, lng: this.mLng });
            this.map.addObject(this.marker);
        }
    }

    private setCenter() {
        if (this.map && this.cLat && this.cLng) {
            this.map.setCenter({ lat: this.cLat, lng: this.cLng });
        }
    }
}
