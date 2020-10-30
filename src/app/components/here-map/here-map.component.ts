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

    private appId = environment.here_appId;
    private appCode = environment.here_apiKey;

    @Input()
    public lat: any;

    @Input()
    public lng: any;

    public constructor() { }

    public ngOnInit() { }

    public ngAfterViewInit() {
        const platform = new H.service.Platform({
            app_id: this.appId,
            apikey: this.appCode
        });
        const defaultLayers = platform.createDefaultLayers();
        const map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat: this.lat, lng: this.lng }
            }
        );
        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    }

}
