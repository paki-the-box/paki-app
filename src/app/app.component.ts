import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { SendRequestService } from './send-request.service';
import {Observer} from "rxjs";

declare var universalLinks: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'person',
      count: 0
    },
    {
      title: 'Boxes',
      url: '/boxes',
      icon: 'cube',
      count: 0
    },
    {
      title: 'Sent Requests',
      url: '/sent',
      icon: 'send',
      count: 0
    },
    {
      title: 'Confirmations',
      url: '/confirmations',
      icon: 'mail-unread',
      count: 0
    },
    {
      title: 'Account',
      url: '/login',
      icon: 'person-circle',
      count: 0
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sendRequestService: SendRequestService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      universalLinks.subscribe('ul_authcallback', (eventData) => {
        // do some work
        console.log('Did launch application from the link: ', eventData.params);
        this.router.navigateByUrl('/login/' + eventData.params?.token);
      });
    });
  }

  ngOnInit() {
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path.toLowerCase());
    }
    // Initialize counts
    this.sendRequestService.getOpenRequests().then(cnt => {
      console.log(cnt)
      this.appPages[2].count = cnt
      console.log(this.appPages)
    })

    this.sendRequestService.observeRequestCount({
      next: value => this.appPages[2].count = value,
      error: err => {},
      complete: () => {},
    })
  }
}
